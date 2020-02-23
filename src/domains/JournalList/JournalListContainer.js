import React, { useState, useEffect } from 'react'

export function JournalListContainer() {
  const [journals, setJournals] = useState([])

  useEffect(() => {
    const token = localStorage.getItem('token')

    fetch(`${process.env.REACT_APP_API_CLIENT_URL}/journals?token=${token}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': 'localhost:3001'
      }
    })
      .then(res => res.json())
      .then(data => {
        setJournals(data)
      })
      .catch(console.log)
  }, [])

  return journals.map(j => <div key={j.id}>{j.name}</div>)
}
