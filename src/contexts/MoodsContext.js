import React, { useState, useEffect, createContext } from 'react'
import { useApi } from 'hooks'

export const MoodsContext = createContext({ moods: null, setMoods: () => {} })

export function MoodsProvider({ children }) {
  const [moods, setMoods] = useState([])
  const { get } = useApi()

  useEffect(() => {
    get('options/mood').then(data => {
      setMoods(data)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MoodsContext.Provider value={{ moods: moods, setMoods: setMoods }}>
      {children}
    </MoodsContext.Provider>
  )
}
