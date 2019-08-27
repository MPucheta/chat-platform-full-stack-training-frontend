import React, { useState } from 'react'
import { Form } from 'formik'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import AuthenticationForm from '../AuthenticationForm'
import { SubmitButton, InputField, AuthenticationErrorMessage, CurrentUserRedirect } from '../util/FormUtils'
import SignUpSchema from '../util/SignUpSchema'
import SIGN_UP from '../util/mutations/SIGN_UP'
import query from '../../../Queries/QUERY_CACHE'

const initialValues = {
  firstname: '',
  lastname: '',
  username: '',
  password: ''
}

function buildCacheUpdater (apolloClient) {
  return (cache, mutationResult) => {
    const data = mutationResult.data.signup
    if (!data.authError) {
      apolloClient.writeQuery({ query, data })
    }
  }
}

function buildStateChanger ({ setShowError, setErrorText, setSignedUp }) {
  return (data) => {
    if (data.signup.authError) {
      setShowError(true)
      setErrorText('Invalid sign up information.')
    } else {
      console.log('Sign up successful.')
      setShowError(false)
      setSignedUp(true)
    }
  }
}

function buildFormBodyRenderer ({ errorText, showError, setShowError }) {
  return () => (
    <Form>
      <AuthenticationErrorMessage errorText={errorText} showError={showError} setShowError={setShowError} />
      <InputField name='firstname' placeholder='Firstname' type='text' />
      <InputField name='lastname' placeholder='Lastname' type='text' />
      <InputField name='username' placeholder='Username' type='text' />
      <InputField name='password' placeholder='Password' type='password' />
      <SubmitButton text='Sign Up' />
    </Form>
  )
}

function SignUpForm () {
  const [showError, setShowError] = useState(false)
  const [errorText, setErrorText] = useState('Unknown error.')
  const [signedUp, setSignedUp] = useState(false)
  const apolloClient = useApolloClient()

  const [signup] = useMutation(SIGN_UP, {
    update: buildCacheUpdater(apolloClient),
    onCompleted: buildStateChanger({ setShowError, setErrorText, setSignedUp })
  })

  const onSubmitHandler = (signUpInput) => signup({ variables: { signUpInput } })

  if (signedUp) return <CurrentUserRedirect />

  return (
    <AuthenticationForm
      initialValues={initialValues}
      validationSchema={SignUpSchema}
      onSubmitHandler={onSubmitHandler}
    >
      {buildFormBodyRenderer({ errorText, showError, setShowError })}
    </AuthenticationForm>
  )
}

export default SignUpForm
