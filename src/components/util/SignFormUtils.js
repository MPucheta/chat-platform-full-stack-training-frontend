import React from 'react'
import Card from 'react-bootstrap/Card'
import { Field, ErrorMessage } from 'formik'

export function inputField (name, placeholder, type = 'text') {
  return <div >
    <Field name={name}>
      {({ field }) => (
        <input className='form-row' {...field} type={type} placeholder={placeholder} />
      )}
    </Field>
    <ErrorMessage name={name} render={(err) => <div className='error-message' >{err}</div>} />
  </div>
}

export function decorateForm (form, headerText, footerText, redirectRoute = null) {
  return (
    <Card>
      <Card.Body>
        <Card.Title>
          {headerText}
        </Card.Title>
        <Card.Text as='div'>
          { form}
        </Card.Text>
        <Card.Link href={redirectRoute}>{footerText}</Card.Link>
      </Card.Body>
    </Card>
  )
}
