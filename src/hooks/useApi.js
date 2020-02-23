import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { apiClient } from 'utils'

export function useApi(path) {
  const [data, setData] = useState(null)
  let history = useHistory()

  useEffect(() => {
    apiClient
      .get(path, () => history.push('/'))
      .then(data => {
        setData(data)
      })
      .catch(console.log)
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return data
}
