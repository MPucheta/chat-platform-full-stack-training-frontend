import gql from 'graphql-tag'

const CURRENT_USER = gql`
{
  currentUser{
    id
    firstname
    lastname
    username
  }
}
`

export default CURRENT_USER
