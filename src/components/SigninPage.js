import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { inputField, decorateForm } from './util/SignFormUtils'
import 'stylesheets/form.css'

export default function SigninPage () {
  const form =
    <Formik
      initialValues={getInitialValues()}
      validationSchema={getValidationSchema()}
      onSubmit={values => console.log(values)}
      render={
        () => (
          <Form>
            {inputField('username', 'Username')}
            {inputField('password', 'Password', 'password')}
            <button className='sign-button' type='submit'>Sign in</button>
          </Form>
        )
      }
    />
  return (
    decorateForm(form, 'Member login', "Don't you have an account?", '/auth/signup')
  )
}

const getInitialValues = () => ({
  username: '',
  password: ''
})

const getValidationSchema = () => (
  Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  })
)
