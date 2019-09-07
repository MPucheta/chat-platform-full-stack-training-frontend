import { setContext } from 'apollo-link-context'
import QUERY_CACHE from '../../../Queries/QUERY_CACHE'

const authLinkInit = (cache) => {
  const authLink = setContext((_, { headers }) => {
    const cacheData = cache.readQuery({ query: QUERY_CACHE })
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${cacheData.jwt}`
      }
    }
  })

  return authLink
}

export default authLinkInit
