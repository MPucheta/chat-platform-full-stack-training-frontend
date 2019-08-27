import React from 'react'
import Alert from 'react-bootstrap/Alert'
import { Field, ErrorMessage } from 'formik'
import { Redirect } from 'react-router-dom'
import '../stylesheets/form.css'

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

export function AuthenticationErrorMessage (props) {
  return props.showError && (
    <Alert variant='danger' onClose={() => props.setShowError(false)} dismissible>
      <strong>Oh snap! </strong> Something went wrong. {props.errorText}
    </Alert>
  )
}

export const CurrentUserRedirect = () => <Redirect to='/currentUser' />
