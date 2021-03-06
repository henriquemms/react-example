import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import CalculatorPage from '../pages/CalculatorPage'
import StarWarsPage from '../pages/StarWarsPage'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/LoginPage'
import {isAuthenticated} from '../services/isAuthenticated'

function SecureRoute ({ children, ...rest }) {

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          children
        ) : (
          <Redirect
            to={{ pathname: '/login-page', state: { from: props.location } }}
          />
        )
      }
    />
  )
}

export default function Routes () {
  return (
    <Router>
      <Switch>
        <SecureRoute path='/calculator' exact={true}>
          <CalculatorPage />
        </SecureRoute>
        <SecureRoute path='/star-wars' exact={true}>
          <StarWarsPage />
        </SecureRoute>
        <Route path='/login-page' exact={true}>
          <LoginPage />
        </Route>
        <SecureRoute path='/' exact={true}>
          <HomePage />
        </SecureRoute>
      </Switch>
    </Router>
  )
}
