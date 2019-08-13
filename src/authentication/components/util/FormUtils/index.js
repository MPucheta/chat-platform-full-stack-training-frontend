import React from 'react'
import { Field, ErrorMessage } from 'formik'
import 'stylesheets/form.css'

export function InputField (props) {
  return (
    <div>
      <Field name={props.name}>
        {({ field }) => (
          <input className='form-row' {...field} type={props.type} placeholder={props.placeholder} />
        )}
      </Field>
      <ErrorMessage name={props.name} render={(err) => <div className='error-message' >{err}</div>} />
    </div>
  )
}

export function SubmitButton ({ text }) {
  return genericButton('sign-button', 'submit', text)
}

function genericButton (className, operationType, text) {
  return <button className={className} type={operationType}>{text}</button>
}
