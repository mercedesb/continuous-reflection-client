import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { TokenContext } from 'contexts'

export function AuthenticatedRoute({ component: Component, ...routeProps }) {
  const { token } = useContext(TokenContext)

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
