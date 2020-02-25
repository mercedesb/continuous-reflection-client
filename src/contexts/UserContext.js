import React, { useState, useEffect, createContext } from 'react'
import { useApi } from 'hooks'

export const UserContext = createContext({ user: null, setUser: () => {} })

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)
  const { get } = useApi()

  useEffect(() => {
    get('whoami').then(data => {
      setUser(data)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>{children}</UserContext.Provider>
  )
}
