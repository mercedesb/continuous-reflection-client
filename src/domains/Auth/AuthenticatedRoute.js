import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { NavLayout } from '_shared'

export function AuthenticatedRoute({ component: Component, ...routeProps }) {
  const token = localStorage.getItem('token')

  return (
    <Route
      {...routeProps}
      render={props =>
        token ? (
          React.createElement(
            NavLayout,
            { ...props, ...routeProps },
            React.createElement(Component, { ...props, ...routeProps })
          )
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}
