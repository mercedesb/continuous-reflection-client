import React, { useState, createContext } from 'react'

export const TokenContext = createContext({ token: null, setToken: () => {} })

export function TokenProvider({ children }) {
  const [token, setToken] = useState(null)

  return (
    <TokenContext.Provider value={{ token: token, setToken: setToken }}>
      {children}
    </TokenContext.Provider>
  )
}
