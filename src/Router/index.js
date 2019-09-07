import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import SignIn from '../authentication/pages/SignIn'
import SignUp from '../authentication/pages/SignUp'
import CurrentUser from '../authentication/pages/CurrentUser'

export default function router () {
  return (
    <Router>
      <Route exact path='/' component={SignIn} />
      <Route exact path='/auth/signup' component={SignUp} />
      <Route exact path='/auth/signin' component={SignIn} />
      <Route exact path='/currentUser' component={CurrentUser} />
    </Router>
  )
}
