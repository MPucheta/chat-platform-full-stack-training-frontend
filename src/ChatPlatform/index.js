import React from 'react'
import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { setContext } from 'apollo-link-context'
import { concat } from 'apollo-link'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import CacheDefaultData from '../CacheDefaultData'
import Router from '../Router'
import QUERY_CACHE from '../Queries/QUERY_CACHE'

const ChatPlatform = () => {
  const cache = new InMemoryCache()
  cache.writeData(CacheDefaultData)

  const authLink = setContext((_, { headers }) => {
    const cacheData = cache.readQuery({ query: QUERY_CACHE })
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${cacheData.jwt}`
      }
    }
  })

  const httpLink = new HttpLink({
    uri: 'http://localhost:3001/graphql'
  })

  const link = concat(authLink, httpLink)
  const client = new ApolloClient({ cache, link })

  return (
    <ApolloHooksProvider client={client}>
      <Router />
    </ApolloHooksProvider>
  )
}

export default ChatPlatform
