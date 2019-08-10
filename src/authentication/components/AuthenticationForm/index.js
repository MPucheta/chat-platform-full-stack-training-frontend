import React from 'react'
import { Formik } from 'formik'

export default class AuthenticationForm extends React.Component {
  constructor (props) {
    super(props)
    this.initialValues = props.initialValues
    this.validationSchema = props.validationSchema
    this.onSubmitHandler = (values) => props.onSubmitHandler(values)
    this.renderForm = props.renderForm
  }

  render () {
    return (
      <Formik
        initialValues={this.initialValues}
        validationSchema={this.validationSchema}
        onSubmit={values => this.onSubmitHandler(values)}
        render={
          this.renderForm
        }
      />
    )
  }
}
