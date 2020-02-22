import React from 'react'
import { Redirect, useParams, useLocation } from 'react-router-dom'
import { TokenContext } from 'contexts'

export function TokenHandler() {
  let { token } = useParams()
  let location = useLocation()

  return (
    <TokenContext.Consumer>
      {({ _, setToken }) => {
        setToken(token)
        return <Redirect to={{ pathname: '/home', state: { from: location } }} />
      }}
    </TokenContext.Consumer>
  )
}
