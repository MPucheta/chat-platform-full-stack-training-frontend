import React, { useState } from 'react'
import { Form } from 'formik'
import { useMutation, useApolloClient } from '@apollo/react-hooks'
import AuthenticationForm from '../AuthenticationForm'
import { SubmitButton, InputField, AuthenticationErrorMessage, CurrentUserRedirect } from '../util/FormUtils'
import SignUpSchema from '../util/SignUpSchema'
import SIGN_UP from '../util/mutations/SIGN_UP'
import QUERY_CACHE from '../../../Queries/QUERY_CACHE'

const initialValues = {
  firstname: '',
  lastname: '',
  username: '',
  password: ''
}

function SignUpForm () {
  const [showError, setShowError] = useState(false)
  const [errorText, setErrorText] = useState('Unknown error. ')
  const [signedUp, setSignedUp] = useState(false)
  const apolloClient = useApolloClient()

  const [signup] = useMutation(SIGN_UP, {
    update (cache, mutationResult) {
      const data = mutationResult.data.signup
      if (!data.authError) {
        apolloClient.writeQuery({
          query: QUERY_CACHE,
          data: data
        })
      }
    },

    onCompleted (data) {
      if (data.signup.authError) {
        setShowError(true)
        setErrorText(data.signup.authError)
      } else {
        console.log('Sign up successful.')
        setShowError(false)
        setSignedUp(true)
      }
    }
  })

  const onSubmitHandler = async (signUpInput) => signup({ variables: { signUpInput } })

  const formBody = () => (
    <Form>
      <AuthenticationErrorMessage errorText={errorText} showError={showError} setShowError={setShowError} />
      <InputField name='firstname' placeholder='Firstname' type='text' />
      <InputField name='lastname' placeholder='Lastname' type='text' />
      <InputField name='username' placeholder='Username' type='text' />
      <InputField name='password' placeholder='Password' type='password' />
      <SubmitButton text='Sign Up' />
    </Form>
  )

  return (
    signedUp ? (
      <CurrentUserRedirect />
    ) : (
      <AuthenticationForm
        initialValues={initialValues}
        validationSchema={SignUpSchema}
        onSubmitHandler={onSubmitHandler}
      >
        {formBody}
      </AuthenticationForm>
    )
  )
}

export default SignUpForm
