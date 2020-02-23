import React from 'react'
import { useApi } from 'hooks'
import { Wrapper, Loading } from '_shared'

export function JournalListContainer() {
  const journals = useApi('journals')

  return (
    <Wrapper>{!journals ? <Loading /> : journals.map(j => <div key={j.id}>{j.name}</div>)}</Wrapper>
  )
}
