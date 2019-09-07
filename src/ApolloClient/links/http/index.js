import { HttpLink } from 'apollo-link-http'

const httpLinkInit = new HttpLink({
  uri: 'http://localhost:3001/graphql'
})

export default httpLinkInit
