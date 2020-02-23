import React from 'react'
import { useApi } from 'hooks'
import { Loading } from '_shared'

export function JournalListContainer() {
  const journals = useApi('journals')

  return (
    <div>
      <h1>Your journals</h1>
      {!journals ? <Loading /> : journals.map(j => <div key={j.id}>{j.name}</div>)}
    </div>
  )
}
