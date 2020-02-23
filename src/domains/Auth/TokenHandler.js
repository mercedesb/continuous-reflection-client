import React from 'react'
import { Redirect, useLocation } from 'react-router-dom'

export function TokenHandler() {
  const location = useLocation()
  const token = new URLSearchParams(location.search).get('token')

  localStorage.setItem('token', token)

  return <Redirect to={{ pathname: '/', state: { from: location } }} />
}
