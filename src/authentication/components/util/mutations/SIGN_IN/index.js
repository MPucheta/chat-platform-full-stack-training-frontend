import gql from 'graphql-tag'

const SIGN_IN = gql`
mutation SIGNIN($signInInput: SigninInput!){
  signin(data: $signInInput){
    user{
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

export default SIGN_IN
