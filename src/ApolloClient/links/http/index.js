import { HttpLink } from 'apollo-link-http'

const BACKEND_ADDR = process.env.REACT_APP_BACKEND_ADDR || 'localhost'
const BACKEND_PORT = process.env.REACT_APP_BACKEND_PORT || 3001

const httpLinkInit = new HttpLink({
  uri: `http://${BACKEND_ADDR}:${BACKEND_PORT}/graphql`
})

export default httpLinkInit
