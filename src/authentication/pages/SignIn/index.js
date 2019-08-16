import React from 'react'
import SignInForm from '../../components/SignInForm'
import { CardStyledForm } from '../../components/CardStyledForm'

const SignIn = () => (
  <CardStyledForm
    form={<SignInForm />}
    headerText='Member login'
    footerText="Don't you have an account?"
    redirectRoute='/auth/signup'
  />
)

export default SignIn
