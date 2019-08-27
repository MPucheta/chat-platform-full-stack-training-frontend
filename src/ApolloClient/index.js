import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { concat } from 'apollo-link'
import CacheDefaultData from '../CacheDefaultData'
import authLink from './links/auth'
import httpLink from './links/http'

const ApolloClientInit = () => {
  const cache = new InMemoryCache()
  cache.writeData(CacheDefaultData)
  const link = concat(authLink(cache), httpLink)

  return new ApolloClient({ cache, link })
}

export default ApolloClientInit
