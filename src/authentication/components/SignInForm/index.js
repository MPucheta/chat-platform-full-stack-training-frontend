import React from 'react'
import { Form } from 'formik'
import AuthenticationForm from '../AuthenticationForm'
import { SubmitButton, InputField } from '../util/FormUtils'
import SignInSchema from '../util/SignInSchema'

const initialValues = {
  username: '',
  password: ''
}

const onSubmitHandler = (values) => console.log(values)

const formBody = () => (
  <Form>
    <InputField name='username' placeholder='Username' type='text' />
    <InputField name='password' placeholder='Password' type='password' />
    <SubmitButton text='Sign In' />
  </Form>
)

const signInForm = () => (
  <AuthenticationForm
    initialValues={initialValues}
    validationSchema={SignInSchema}
    onSubmitHandler={onSubmitHandler}
  >
    {formBody}
  </AuthenticationForm>
)

export default signInForm
