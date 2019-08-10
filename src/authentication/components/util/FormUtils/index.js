import React from 'react'
import { Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import 'stylesheets/form.css'

export function InputField ({ name, placeholder, type = 'text' }) {
  // without this there is an error passing the prop arguments directly to Field
  const inputFieldParameterDestructurer = (name, placeholder, type) => (
    <div>
      <Field name={name}>
        {({ field }) => (
          <input className='form-row' {...field} type={type} placeholder={placeholder} />
        )}
      </Field>
      <ErrorMessage name={name} render={(err) => <div className='error-message' >{err}</div>} />
    </div>
  )
  return inputFieldParameterDestructurer(name, placeholder, type)
}

export function createStringSchemaFromInputs (inputs) {
  const baseSchema = {}
  inputs.forEach((input) => {
    if (input.required) {
      baseSchema[input.name] = Yup.string().required(input.requiredMessage)
    } else {
      baseSchema[input.name] = Yup.string()
    }
  })
  return Yup.object().shape(baseSchema)
}

export function createBlankInitialValues (inputs) {
  const values = {}
  inputs.forEach((input) => { values[input.name] = '' })
  return values
}

export function createInputFieldGroupFromInputs (inputs) {
  return inputs.map(input =>
    <InputField
      key={input.name}
      name={input.name}
      placeholder={input.placeholder}
      type={input.type} />
  )
}

export function SubmitButton ({ text }) {
  return genericButton('sign-button', 'submit', text)
}

function genericButton (className, operationType, text) {
  return <button className={className} type={operationType}>{text}</button>
}
