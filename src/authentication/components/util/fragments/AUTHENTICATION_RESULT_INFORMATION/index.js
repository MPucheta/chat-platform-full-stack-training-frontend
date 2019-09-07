import gql from 'graphql-tag'

const AUTHENTICATION_RESULT_INFORMATION = gql`
  fragment AuthenticationResultInformation on AuthenticationResult {
    user {
      id
      firstname
      lastname
      username
    }
    authError
    jwt
  }
`

export function getFragmentName () {
  return 'AuthenticationResultInformation'
}

export default AUTHENTICATION_RESULT_INFORMATION
