import React from 'react'
import SignUpForm from '../../components/SignUpForm'
import { CardStyledForm } from '../../components/CardStyledForm'

const SignUp = () =>
  <CardStyledForm
    form={<SignUpForm />}
    headerText='Member registration'
    footerText='Do you already have an account?'
    redirectRoute='/auth/signin'
  />

export default SignUp
