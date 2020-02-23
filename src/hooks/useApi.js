import { useState, useEffect } from 'react'

export function useApi(path) {
  const [data, setData] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')

    fetch(`${process.env.REACT_APP_API_CLIENT_URL}/${path}?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': 'localhost:3001'
      }
    })
      .then(res => res.json())
      .then(data => {
        setData(data)
      })
      .catch(console.log)
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return data
}
