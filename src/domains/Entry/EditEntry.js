import React from 'react'
import { useParams } from 'react-router-dom'
import { useApi } from 'hooks'
import { Loading } from '_shared'
import { EditProfessionalDevelopmentEntry } from './EditProfessionalDevelopmentEntry'
import { EditPoetryEntry } from './EditPoetryEntry'

export function EditEntry() {
  const { entry_id } = useParams()
  const entry = useApi(`journal_entries/${entry_id}`)

  if (!entry) {
    return <Loading />
  } else {
    if (entry.contentType === 'ProfessionalDevelopmentContent') {
      return <EditProfessionalDevelopmentEntry entry={entry} />
    } else if (entry.contentType === 'PoetryContent') {
      return <EditPoetryEntry entry={entry} />
    } else {
      return null
    }
  }
}
