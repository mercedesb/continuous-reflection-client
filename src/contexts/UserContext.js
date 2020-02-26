import React, { useState, useEffect, createContext } from 'react'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'

export const UserContext = createContext({ user: null, setUser: () => {} })

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const { get } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl('whoami')

  useEffect(() => {
    get(url).then(data => {
      setUser(data)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>{children}</UserContext.Provider>
  )
}
