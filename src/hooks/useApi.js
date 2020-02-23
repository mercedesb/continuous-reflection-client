import { useState, useEffect } from 'react'
import { apiClient } from 'utils'

export function useApi(path) {
  const [data, setData] = useState(null)
  debugger

  useEffect(() => {
    apiClient
      .get(path)
      .then(data => {
        setData(data)
      })
      .catch(console.log)
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return data
}
