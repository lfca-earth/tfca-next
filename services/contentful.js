import crypto from 'crypto'
import fs from 'fs'
import { gql, request } from 'graphql-request'
import path from 'path'

import {
  ActionFragment,
  AllNavsFragment,
  MetaDataFragment,
  MetaDataListsFragment,
} from '../fragments/contentful'
import { DEFAULT, SETTINGS_ID } from '../utils'

const space = process.env.NEXT_PUBLIC_CF_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CF_ACCESS_TOKEN

// Generic GraphQL client for contentful used
// by all subsequent queries, can also called directly
export const fetchContent = async (query, variables) => {
  const hash = crypto
    .createHash('md5')
    .update(query + JSON.stringify(variables || {}))
    .digest('hex')

  const CACHE_PATH = path.join(__dirname, `.${hash}`)

  let data

  if (!process.env.DISABLE_CONTENTFUL_SERVICE_CACHE) {
    // Try getting the data from cache
    try {
      data = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'))
    } catch (error) {
      // Nothing to do
    }
  }

  if (!data) {
    // Fetch fresh data if no cached data is available
    try {
      data =
        (await request({
          document: query,
          requestHeaders: {
            authorization: `Bearer ${accessToken}`,
            'content-type': 'application/json',
          },
          url: `https://graphql.contentful.com/content/v1/spaces/${space}`,
          variables: variables,
        })) || {}
    } catch (error) {
      console.error(
        `There was a problem retrieving entries with the query ${query}`
      )
      console.error(error)
    }

    // Write data to cache
    try {
      fs.writeFileSync(CACHE_PATH, JSON.stringify(data), 'utf8')
    } catch (e) {
      console.error('Error writing to cache', e)
    }
  }

  return data
}

// Specific queries are needed because the contentful
// graphql api has a limit for complexity so we need to
// split the calls into multiple queries

export const fetchAllNavs = async (locale) => {
  const query = gql`
    ${AllNavsFragment}
    query ($locale: String) {
      navigationCollection(locale: $locale, limit: 10) {
        ... on NavigationCollection {
          ...AllNavsFragment
        }
      }
    }
  `
  const variables = {
    locale: locale,
  }

  const { navigationCollection } = await fetchContent(query, variables)

  const navsById = navigationCollection?.items.reduce((allNavs, nav) => {
    const { navigationId, ...rest } = nav
    return { ...allNavs, [navigationId]: { ...rest } }
  }, {})

  return navsById
}

export const fetchMetaData = async (locale, settingsId) => {
  const query = gql`
    ${MetaDataFragment}
    query ($locale: String, $settingsId: String!) {
      settings(locale: $locale, id: $settingsId) {
        ... on Settings {
          ...MetaDataFragment
        }
      }
    }
  `
  const variables = {
    locale: locale,
    settingsId: settingsId,
  }

  const { settings } = await fetchContent(query, variables)
  const { resourcesCollection, ...rest } = settings

  const blocks = resourcesCollection?.items.reduce((allBlocks, block) => {
    const { key, value } = block
    if (!key) return allBlocks
    return { ...allBlocks, [key]: value }
  }, {})

  return {
    blocks,
    ...rest,
  }
}

export const fetchMetaDataLists = async (locale, settingsId) => {
  const query = gql`
    ${MetaDataListsFragment}
    query ($locale: String, $settingsId: String!) {
      settings(locale: $locale, id: $settingsId) {
        ... on Settings {
          ...MetaDataListsFragment
        }
      }
    }
  `
  const variables = {
    locale: locale,
    settingsId: settingsId,
  }

  const { settings } = await fetchContent(query, variables)
  const { listsCollection } = settings

  const lists = listsCollection?.items.reduce((allLists, list) => {
    const { itemsCollection, listId } = list
    return { ...allLists, [listId]: itemsCollection }
  }, {})

  return lists
}

export const fetchPageBySlug = async (locale, slug) => {
  const query = gql`
    query ($locale: String, $slug: String) {
      pageLocalCollection(limit: 1, locale: $locale, where: { slug: $slug }) {
        items {
          slug
          layout
          title
          style
          subtitle
          componentId
          body {
            json
          }
        }
      }
    }
  `

  const variables = {
    locale: locale,
    slug: slug,
  }

  const { pageLocalCollection } = await fetchContent(query, variables)
  const [pageData] = pageLocalCollection.items

  return pageData
}

// collector function all contentful queries for the
// translator provider that is used on every page
// feeding non page related translations, e.g. navs
// or meta data
export const fetchAllStaticContent = async (locale) => {
  const promises = [
    fetchAllNavs(locale),
    fetchMetaData(locale, SETTINGS_ID),
    fetchMetaDataLists(locale, SETTINGS_ID),
  ]

  const [navs, metaData, metaDataLists] = await Promise.all(promises)

  return {
    metaData,
    metaDataLists,
    navs,
  }
}

// Fetch all action module related content
// to prevent too complex queries we fetch the collection
// ids in a separate query and afterwards get the content
// for each action module with a separate api call
export const fetchCollectionIds = async (locale, slug) => {
  const query = gql`
    query ($locale: String, $slug: String) {
      actionsLocalCollection(
        limit: 1
        locale: $locale
        where: { slug: $slug }
      ) {
        items {
          layout
          actionsCollection(limit: 15) {
            items {
              ... on Action {
                sys {
                  id
                }
                quizCollection(limit: 1) {
                  total
                }
                blocksCollection(limit: 1) {
                  total
                }
                dataCollection(limit: 1) {
                  total
                }
                listsCollection(limit: 1) {
                  total
                }
              }
            }
          }
        }
      }
    }
  `
  const variables = {
    locale: locale,
    slug: slug,
  }

  const { actionsLocalCollection } = await fetchContent(query, variables)
  const layout = actionsLocalCollection?.items[0]?.layout

  const ids = actionsLocalCollection?.items[0]?.actionsCollection?.items?.map(
    (item) => ({
      blocksLimit: item.blocksCollection.total,
      dataLimit: item.dataCollection.total,
      id: item.sys.id,
      listsLimit: item.listsCollection.total,
      quizLimit: item.quizCollection.total,
    })
  )
  return { ids, layout: layout || DEFAULT }
}

// Fetch all action module related content
const fetchActionDataById = async (id, locale) => {
  const query = gql`
    ${ActionFragment}
    query (
      $locale: String
      $id: String!
      $dataLimit: Int
      $blocksLimit: Int
      $listsLimit: Int
      $quizLimit: Int
    ) {
      action(id: $id, locale: $locale) {
        ... on Action {
          ...ActionFragment
        }
      }
    }
  `
  const variables = {
    blocksLimit: id.blocksLimit,
    dataLimit: id.dataLimit,
    id: id.id,
    listsLimit: id.listsLimit,
    locale: locale,
    quizLimit: id.quizLimit,
  }

  const { action } = await fetchContent(query, variables)
  return action
}

export const fetchAllActions = async (locale, actionCollectionSlug) => {
  const { ids: collectionIds, layout } = await fetchCollectionIds(
    locale,
    actionCollectionSlug
  )
  const promises = collectionIds.map((id) => fetchActionDataById(id, locale))

  const results = await Promise.all(promises)
  const transformed = transformResults(results)

  return { ...transformed, layout }
}

// Helper function to transform the results into key value pairs
const transformResults = (results) => {
  const nav = []
  const transformed = results?.map(
    ({ blocksCollection, dataCollection, listsCollection, ...item }) => {
      // create a simple summary element, used in nav
      nav.push({
        icon: item.icon?.url || '',
        id: item.id || '',
        name: item.name || '',
      })

      // transform blocks to key value pairs
      const blocks = blocksCollection?.items.reduce((allBlocks, block) => {
        const { key, value } = block
        return { ...allBlocks, [key]: value }
      }, {})
      // transform lists to key value pairs
      const lists = listsCollection?.items.reduce((allLists, list) => {
        const { itemsCollection, listId } = list
        return { ...allLists, [listId]: itemsCollection.items }
      }, {})
      // transform data to key value pairs
      const data = dataCollection?.items.reduce((allData, data) => {
        const {
          cardLayout,
          filtersCollection,
          itemsCollection,
          listGrid,
          listId,
        } = data
        return {
          ...allData,
          [listId]: {
            cardLayout,
            filters: filtersCollection?.items || [],
            items: itemsCollection?.items || [],
            listGrid,
          },
        }
      }, {})
      // replace transformed attributes
      const transformedActions = {
        ...item,
        blocks,
        data,
        lists,
      }
      return transformedActions
    }
  )

  return {
    items: transformed,
    nav,
  }
}
