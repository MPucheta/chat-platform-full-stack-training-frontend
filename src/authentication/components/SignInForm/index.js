import React from 'react'
import { Form } from 'formik'
import AuthenticationForm from '../AuthenticationForm'
import { createBlankInitialValues, SubmitButton, createInputFieldGroupFromInputs, createStringSchemaFromInputs } from '../util/FormUtils'
import Input from '../util/Input'

const username = new Input('username', 'Username', 'text', true, 'Username is required')
const password = new Input('password', 'Password', 'text', true, 'Password is required')

const inputs = [username, password]
const initialValues = createBlankInitialValues(inputs)
const schema = () => createStringSchemaFromInputs(inputs)
const onSubmitHandler = (values) => console.log(values)

const renderForm = () => (
  <Form>
    {createInputFieldGroupFromInputs(inputs)}
    <SubmitButton text='Sign in' />
  </Form>
)

const signInForm = () => <AuthenticationForm
  initialValues={initialValues}
  validationSchema={schema}
  onSubmitHandler={onSubmitHandler}
  renderForm={renderForm}
/>

export default signInForm
