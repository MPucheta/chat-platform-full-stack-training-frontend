import React from 'react'
import { Formik } from 'formik'

export default function AuthenticationForm (props) {
  return (
    <Formik
      initialValues={props.initialValues}
      validationSchema={props.validationSchema}
      onSubmit={props.onSubmitHandler}
      render={
        props.children
      }
    />
  )
}
