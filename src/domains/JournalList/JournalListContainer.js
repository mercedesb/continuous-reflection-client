import React, { useState, useEffect, useContext } from 'react'
import { TokenContext } from 'contexts'

export function JournalListContainer() {
  const { token } = useContext(TokenContext)
  const [journals, setJournals] = useState([])

  useEffect(() => {
    debugger
    fetch(`${process.env.REACT_APP_API_CLIENT_URL}journals?token=${token}`)
      .then(res => res.json())
      .then(data => {
        setJournals(data)
      })
      .catch(console.log)
  })

  return journals.map(j => <div key={j.id}>{j.name}</div>)
}
