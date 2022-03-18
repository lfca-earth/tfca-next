import { gql } from 'graphql-request'
import React from 'react'

import { DisclosureOverview } from '../../components/DisclosureOverview'
import { DefaultLayout } from '../../components/Layout/DefaultLayout'
import {
  fetchAllStaticContent,
  fetchContent,
  fetchPageBySlug,
} from '../../services/contentful'
import { fetchData } from '../../services/lfca'
import { QualifiedCompanyItemFragment } from '../../services/lfca/fragments'
import { Text } from '../../utils/Text'

const DISCLOSURE_OVERVIEW = 'disclosureOverview'

const renderCustomComponent = (id, data) => {
  switch (id) {
    case DISCLOSURE_OVERVIEW:
      return <DisclosureOverview items={data} />
    default:
      return null
  }
}

export default function Page({ items, pageData }) {
  return (
    <DefaultLayout
      style={pageData?.style}
      subtitle={pageData?.subtitle}
      title={pageData?.title}
    >
      {pageData?.body && (
        <div className="page-body">
          <Text block={pageData?.body} />
        </div>
      )}
      {renderCustomComponent(pageData?.componentId, items)}
    </DefaultLayout>
  )
}

const allParticipatingCompaniesQuery = gql`
  ${QualifiedCompanyItemFragment}
  query qualifiedCompanies($input: QualifiedCompaniesInput) {
    qualifiedCompanies(input: $input) {
      ... on QualifiedCompanyItem {
        ...QualifiedCompanyItemFragment
      }
    }
  }
`

export async function getStaticProps({ locale, params }) {
  const { slug } = params
  const content = await fetchAllStaticContent(locale)
  const pageData = await fetchPageBySlug(locale, slug)

  const data = {
    content,
    pageData,
  }

  // fetch qualified companies only if needed
  if (pageData?.componentId === DISCLOSURE_OVERVIEW) {
    const { qualifiedCompanies } = await fetchData(
      allParticipatingCompaniesQuery,
      {
        input: {
          filter: {
            achievementContentIds: ['tfca2022Qualification'],
          },
        },
      }
    )
    data.items = qualifiedCompanies
  }

  return {
    props: data,
  }
}

export async function getStaticPaths({ locales }) {
  const query = gql`
    query {
      pageLocalCollection(limit: 50) {
        items {
          slug
        }
      }
    }
  `
  const { pageLocalCollection } = await fetchContent(query)
  const paths = pageLocalCollection.items.reduce((allPaths, item) => {
    const pagePaths = locales.map((locale) => ({
      locale,
      params: { slug: item.slug },
    }))

    return [...allPaths, ...pagePaths]
  }, [])

  return {
    fallback: false,
    paths,
  }
}