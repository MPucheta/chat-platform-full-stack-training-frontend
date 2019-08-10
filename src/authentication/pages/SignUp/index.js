import React from 'react'
import SignUpForm from 'authentication/components/SignUpForm'
import { CardStyledForm } from 'authentication/components/CardStyledForm'

const SignUp = () =>
  <CardStyledForm
    form={<SignUpForm />}
    headerText='Member registration'
    footerText='Do you already have an account?'
    redirectRoute='/auth/signin'
  />
export default SignUp
