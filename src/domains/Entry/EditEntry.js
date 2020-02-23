import React from 'react'
import { useParams } from 'react-router-dom'
import { useApi } from 'hooks'
import { Loading, Wrapper } from '_shared'
import { EditProfessionalDevelopmentEntry } from './EditProfessionalDevelopmentEntry'
import { EditPoetryEntry } from './EditPoetryEntry'

export function EditEntry() {
  const { entry_id } = useParams()
  const entry = useApi(`journal_entries/${entry_id}`)

  return (
    <Wrapper>
      {!entry && <Loading />}
      {entry && entry.contentType === 'ProfessionalDevelopmentContent' && (
        <EditProfessionalDevelopmentEntry entry={entry} />
      )}
      {entry && entry.contentType === 'PoetryContent' && <EditPoetryEntry entry={entry} />}
    </Wrapper>
  )
}
