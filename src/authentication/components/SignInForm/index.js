import React, { useState } from 'react'
import { Form } from 'formik'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import AuthenticationForm from '../AuthenticationForm'
import { SubmitButton, InputField, AuthenticationErrorMessage, CurrentUserRedirect } from '../util/FormUtils'
import SignInSchema from '../util/SignInSchema'
import SIGN_IN from '../util/mutations/SIGN_IN'
import QUERY_CACHE from '../../../Queries/QUERY_CACHE'
import JWTBypass from '../JWTBypass'

const initialValues = {
  username: '',
  password: ''
}

function SignInForm () {
  const [showError, setShowError] = useState(false)
  const [errorText, setErrorText] = useState('Unknown error. ')
  const [signedIn, setSignedIn] = useState(false)
  const apolloClient = useApolloClient()

  const [signin] = useMutation(SIGN_IN, {
    update (cache, mutationResult) {
      const data = mutationResult.data.signin
      if (!data.authError) {
        apolloClient.writeQuery({
          query: QUERY_CACHE,
          data: data
        })
      }
    },

    onCompleted (data) {
      if (data.signin.authError) {
        setShowError(true)
        setErrorText(data.signin.authError)
      } else {
        console.log('Sign in successful.')
        setShowError(false)
        setSignedIn(true)
      }
    }
  })

  const onSubmitHandler = async (signInInput) => signin({ variables: { signInInput } })

  const formBody = () => (
    <Form>
      <AuthenticationErrorMessage errorText={errorText} showError={showError} setShowError={setShowError} />
      <InputField name='username' placeholder='Username' type='text' />
      <InputField name='password' placeholder='Password' type='password' />
      <SubmitButton text='Sign In' />
    </Form>
  )

  return (
    signedIn ? (
      <CurrentUserRedirect />
    ) : (
      <AuthenticationForm
        initialValues={initialValues}
        validationSchema={SignInSchema}
        onSubmitHandler={onSubmitHandler}
      >
        {formBody}
      </AuthenticationForm>
    )
  )
}

const jwtBypassedSignIn = () => (
  <JWTBypass>
    <SignInForm />
  </JWTBypass>
)

export default jwtBypassedSignIn
