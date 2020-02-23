import React from 'react'
import { Link } from 'react-router-dom'
import { useApi } from 'hooks'
import { Loading, Button } from '_shared'

export function JournalListContainer() {
  const journals = useApi('journals')

  return (
    <div>
      <h1>Your journals</h1>
      <Button color='bg-purple-300'>
        <Link to='/journals/new'>Add Journal</Link>
      </Button>
      {!journals ? (
        <Loading />
      ) : (
        journals.map(j => (
          <div key={j.id}>
            <Link to={`/journals/${j.id}`}>{j.name}</Link>
          </div>
        ))
      )}
    </div>
  )
}
