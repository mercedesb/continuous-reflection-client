import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { TokenContext } from 'contexts'

export function AuthenticatedRoute({ component: Component, ...routeProps }) {
  return (
    <TokenContext.Consumer>
      {token => (
        <Route
          {...routeProps}
          render={props =>
            token ? (
              <Component {...props} />
            ) : (
              <Redirect to={{ pathname: '/', state: { from: props.location } }} />
            )
          }
        />
      )}
    </TokenContext.Consumer>
  )
}
