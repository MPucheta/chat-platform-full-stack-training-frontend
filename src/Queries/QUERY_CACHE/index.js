import gql from 'graphql-tag'

const QUERY_CACHE = gql`
  query QueryCache {
    user {
      id
      firstname
      lastname
      username
    }
    jwt
  }
`

export default QUERY_CACHE
