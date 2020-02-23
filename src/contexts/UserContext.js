import React, { useState, useEffect, createContext } from 'react'

export const UserContext = createContext({ user: null, setUser: () => {} })

export function UserProvider({ children }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch('/api/v1/whoami')
      .then(response => response.json())
      .then(data => {
        setUser(data)
      })
  }, [])

  return (
    <UserContext.Provider value={{ user: user, setUser: setUser }}>{children}</UserContext.Provider>
  )
}
