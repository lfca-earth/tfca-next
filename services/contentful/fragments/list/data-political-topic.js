import { gql } from 'graphql-request'

export const DataPoliticalTopicFragment = gql`
  fragment DataPoliticalTopicFragment on DataPoliticalTopic {
    label
    messagesCollection(limit: 5) {
      items {
        ...PrewrittenMessageFragment
      }
    }
    delegationsCommittees
  }
`