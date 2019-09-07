import gql from 'graphql-tag'
import AUTHENTICATION_RESULT_INFORMATION, { getFragmentName } from '../../fragments/AUTHENTICATION_RESULT_INFORMATION'

const SIGN_IN = gql`
  mutation Signin ($signInInput: SigninInput!) {
    signin (data: $signInInput) {
      ...${getFragmentName()}
    }
  }
  ${AUTHENTICATION_RESULT_INFORMATION}
`

export default SIGN_IN
