import React, { useState } from 'react'
import { Form } from 'formik'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import AuthenticationForm from '../AuthenticationForm'
import { SubmitButton, InputField, AuthenticationErrorMessage, CurrentUserRedirect } from '../util/FormUtils'
import SignInSchema from '../util/SignInSchema'
import SIGN_IN from '../util/mutations/SIGN_IN'
import query from '../../../Queries/QUERY_CACHE'

const initialValues = {
  username: '',
  password: ''
}

function buildCacheUpdater (apolloClient) {
  return (cache, mutationResult) => {
    const data = mutationResult.data.signin
    if (!data.authError) {
      apolloClient.writeQuery({ query, data })
    }
  }
}

function buildStateChanger ({ setShowError, setErrorText, setSignedIn }) {
  return (data) => {
    if (data.signin.authError) {
      setShowError(true)
      setErrorText('Invalid username or password.')
    } else {
      console.log('Sign in successful.')
      setShowError(false)
      setSignedIn(true)
    }
  }
}

function buildFormBodyRenderer ({ errorText, showError, setShowError }) {
  return () => (
    <Form>
      <AuthenticationErrorMessage errorText={errorText} showError={showError} setShowError={setShowError} />
      <InputField name='username' placeholder='Username' type='text' />
      <InputField name='password' placeholder='Password' type='password' />
      <SubmitButton text='Sign In' />
    </Form>
  )
}

function SignInForm () {
  const [showError, setShowError] = useState(false)
  const [errorText, setErrorText] = useState('Unknown error.')
  const [signedIn, setSignedIn] = useState(false)
  const apolloClient = useApolloClient()

  const [signin] = useMutation(SIGN_IN, {
    update: buildCacheUpdater(apolloClient),
    onCompleted: buildStateChanger({ setShowError, setErrorText, setSignedIn })
  })

  const onSubmitHandler = (signInInput) => signin({ variables: { signInInput } })

  if (signedIn) return <CurrentUserRedirect />

  return (
    <AuthenticationForm
      initialValues={initialValues}
      validationSchema={SignInSchema}
      onSubmitHandler={onSubmitHandler}
    >
      {buildFormBodyRenderer({ errorText, showError, setShowError })}
    </AuthenticationForm>
  )
}

export default SignInForm
