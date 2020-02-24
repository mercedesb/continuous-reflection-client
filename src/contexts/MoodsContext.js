import React, { useState, useEffect, createContext } from 'react'
import { useApi } from 'hooks'

export const MoodsContext = createContext({ moods: null, setMoods: () => {} })

export function MoodsProvider({ children }) {
  const [moods, setMoods] = useState([])
  const fetchedMoods = useApi('options/mood')

  useEffect(() => {
    if (!!fetchedMoods) {
      setMoods(fetchedMoods)
    }
  }, [fetchedMoods]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MoodsContext.Provider value={{ moods: moods, setMoods: setMoods }}>
      {children}
    </MoodsContext.Provider>
  )
}
