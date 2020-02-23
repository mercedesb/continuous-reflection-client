import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export function AuthenticatedRoute({ component: Component, ...routeProps }) {
  const token = localStorage.getItem('token')

  return (
    <Route
      {...routeProps}
      render={props =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}
