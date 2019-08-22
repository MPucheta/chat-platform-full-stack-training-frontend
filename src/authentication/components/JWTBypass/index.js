import { useApolloClient } from '@apollo/react-hooks'
import QUERY_CACHE from '../../../Queries/QUERY_CACHE'

export default function JWTBypass (props) {
  const apolloClient = useApolloClient()
  const cacheData = apolloClient.readQuery({ query: QUERY_CACHE })
  const user = cacheData.user
  const jwt = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjaGF0LXBsYXRmb3JtLXZpc2l0b3IiLCJpYXQiOjE1NjY0MjIyMDksImV4cCI6MzI1MjM3MTUwMDksImF1ZCI6ImNoYXQtcGxhdGZvcm0iLCJzdWIiOiI3NGRjOGM3Ni0xOTM5LTRjODgtYjlhMC1kZjZmZjc5ZDE2ZmMiLCJ1c2VybmFtZSI6ImNoYXQtcGxhdGZvcm0tdmlzaXRvciIsImZpcnN0bmFtZSI6ImNoYXQtcGxhdGZvcm0tdmlzaXRvciIsImxhc3RuYW1lIjoiY2hhdC1wbGF0Zm9ybS12aXNpdG9yIn0.Z9O75BN8iK5dSgUbCkun2kwhRqjregtGT1RMLZ6TGA4`

  apolloClient.writeQuery({
    query: QUERY_CACHE,
    data: { user, jwt }
  })

  return (
    { ...props.children }
  )
}
