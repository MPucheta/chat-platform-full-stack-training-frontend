import gql from 'graphql-tag'

const SIGN_UP = gql`
  mutation Signup ($signUpInput: SignupInput!) {
    signup (data: $signUpInput) {
      user {
        id
        firstname
        lastname
        username
      }
      authError
      jwt
    }
  }
`

export default SIGN_UP
