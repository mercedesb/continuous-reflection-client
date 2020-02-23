import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

export function SignOut() {
  const location = useLocation()
  localStorage.removeItem('token')

  return <Redirect to={{ pathname: '/', state: { from: location } }} />
}
