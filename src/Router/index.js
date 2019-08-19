import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignIn from '../authentication/pages/SignIn'
import SignUp from '../authentication/pages/SignUp'

export default function router () {
  return (
    <Router forceRefresh>
      <Route exact path='/' component={SignIn} />
      <Route exact path='/auth/signup' component={SignUp} />
      <Route exact path='/auth/signin' component={SignIn} />
    </Router>
  )
}
