import React from 'react'
import { Form } from 'formik'
import AuthenticationForm from '../AuthenticationForm'
import { SubmitButton, InputField } from '../util/FormUtils'
import SignUpSchema from '../util/SignUpSchema'

const initialValues = {
  firstname: '',
  lastname: '',
  username: '',
  password: ''
}

const onSubmitHandler = (values) => console.log(values)

const formBody = () => (
  <Form>
    <InputField name='firstname' placeholder='Firstname' type='text' />
    <InputField name='lastname' placeholder='Lastname' type='text' />
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
