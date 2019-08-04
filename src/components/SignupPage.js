import React from 'react'
import * as Yup from 'yup'
import { Formik, Form } from 'formik'
import { inputField, decorateForm } from './util/SignFormUtils'
import 'stylesheets/form.css'

export default function SignupPage () {
  const form =
    <Formik
      initialValues={getInitialValues()}
      validationSchema={getValidationSchema()}
      onSubmit={values => console.log(values)}
      render={
        () => (
          <Form>
            {inputField('firstName', 'First name')}
            {inputField('lastName', 'Last name')}
            {inputField('username', 'Username')}
            {inputField('password', 'Password', 'password')}
            <button className='sign-button' type='submit'>Sign up</button>
          </Form>
        )
      }
    />
  return (
    decorateForm(form, 'Member registration', 'Do you already have an account?', '/auth/signin')
  )
}

const getInitialValues = () => ({
  firstName: '',
  lastName: '',
  username: '',
  password: ''
})

const getValidationSchema = () => (
  Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required')
  })
)
