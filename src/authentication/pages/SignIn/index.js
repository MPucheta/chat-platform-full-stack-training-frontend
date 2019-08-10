import React from 'react'
import SignInForm from 'authentication/components/SignInForm'
import { CardStyledForm } from 'authentication/components/CardStyledForm'

const SignIn = () =>
  <CardStyledForm
    form={<SignInForm />}
    headerText='Member login'
    footerText="Don't you have an account?"
    redirectRoute='/auth/signup'
  />
export default SignIn
