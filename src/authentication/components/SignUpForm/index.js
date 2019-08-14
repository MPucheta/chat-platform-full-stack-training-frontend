import React from 'react'
import { Form } from 'formik'
import AuthenticationForm from '../AuthenticationForm'
import { SubmitButton, InputField } from '../util/FormUtils'
import SignUpSchema from '../util/SignUpSchema'

const initialValues = {
  firstName: '',
  lastName: '',
  username: '',
  password: ''
}

const onSubmitHandler = (values) => console.log(values)

const formBody = () => (
  <Form>
    <InputField name='firstName' placeholder='First name' type='text' />
    <InputField name='lastName' placeholder='Last name' type='text' />
    <InputField name='username' placeholder='Username' type='text' />
    <InputField name='password' placeholder='Password' type='password' />
    <SubmitButton text='Sign Up' />
  </Form>
)

const signUpForm = () =>
  <AuthenticationForm
    initialValues={initialValues}
    validationSchema={SignUpSchema}
    onSubmitHandler={onSubmitHandler}
  >
    {formBody}
  </AuthenticationForm>

export default signUpForm
