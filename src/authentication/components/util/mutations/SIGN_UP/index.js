import gql from 'graphql-tag'
import AUTHENTICATION_RESULT_INFORMATION, { getFragmentName } from '../../fragments/AUTHENTICATION_RESULT_INFORMATION'

const SIGN_UP = gql`
  mutation Signup ($signUpInput: SignupInput!) {
    signup (data: $signUpInput) {
      ...${getFragmentName()}
    }
  }
  ${AUTHENTICATION_RESULT_INFORMATION}
`

export default SIGN_UP
