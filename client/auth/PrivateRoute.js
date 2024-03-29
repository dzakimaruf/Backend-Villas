import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import auth from './AuthHelper'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    auth.isAuthenticated() ? (
      <Component {...props}/>
    ) : (
      <Redirect to = {{
        pathname: '/villbook/landing',
        state: { from: props.location },
        search: `?redirect=${props.location.pathname}`
      }}/>
    )
  )}/>
)

export default PrivateRoute