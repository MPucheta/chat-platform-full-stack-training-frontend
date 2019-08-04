import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SigninPage from '../src/components/SigninPage'
import SignupPage from '../src/components/SignupPage'

export default function router () {
  return (<Router forceRefresh>
    <Route exact path='/' component={SigninPage} />
    <Route exact path='/auth/signup' component={SignupPage} />
    <Route exact path='/auth/signin' component={SigninPage} />
  </Router>)
}
