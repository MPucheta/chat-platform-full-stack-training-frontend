import React from 'react'
import { ApolloProvider as ApolloHooksProvider } from '@apollo/react-hooks'
import Router from '../Router'
import ApolloClient from '../ApolloClient'

const ChatPlatform = () => (
  <ApolloHooksProvider client={ApolloClient()}>
    <Router />
  </ApolloHooksProvider>
)

export default ChatPlatform
