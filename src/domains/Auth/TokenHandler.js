import React, { useContext } from 'react'
import { Redirect, useLocation } from 'react-router-dom'
import { TokenContext } from 'contexts'

export function TokenHandler() {
  const { setToken } = useContext(TokenContext)
  const location = useLocation()
  const token = new URLSearchParams(location.search).get('token')

  setToken(token)

  return <Redirect to={{ pathname: '/', state: { from: location } }} />
}
