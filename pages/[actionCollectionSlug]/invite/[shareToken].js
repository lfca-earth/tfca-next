import jwt from 'jsonwebtoken'
import Head from 'next/head'
import React from 'react'

import ActionModules from '../../../components/ActionModules'
import SplitLayout from '../../../components/Layout/SplitLayout'
import { fetchAllStaticData } from '../../../services'

export default function InvitePage({ actions, ogImageUrl, stats }) {
  return (
    <>
      <Head>
        <meta content={ogImageUrl} property="og:image" />
      </Head>
      <SplitLayout layout={actions?.layout} nav={actions?.nav}>
        <ActionModules actions={actions?.items} stats={stats} />
      </SplitLayout>
    </>
  )
}

export async function getStaticProps(props) {
  const { locale, params } = props
  try {
    const { actionCollectionSlug, shareToken } = params

    // Parse token
    // TODO: Add propper fallback values
    const {
      invitee1 = { challenge: 'unkown challenge', name: 'unknown name' },
      invitee2 = { challenge: 'unkown challenge', name: 'unknown name' },
      invitee3 = { challenge: 'unkown challenge', name: 'unknown name' },
      sender = { challenge: 'unkown challenge', name: 'unknown name' },
    } = jwt.verify(shareToken, process.env.JWT_TOKEN_PRIVATE_KEY)

    // Fetch content
    const staticData = await fetchAllStaticData(locale, actionCollectionSlug)

    return {
      props: {
        ...staticData,
        customization: {
          from: sender.name,
          to: `${invitee1.name}, ${invitee2.name} and ${invitee3.name}`,
        },
        ogImageUrl: `${process.env.BASE_URL}/api/images/${shareToken}`,
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  }
}

export async function getStaticPaths() {
  return { fallback: 'blocking', paths: [] }
}
