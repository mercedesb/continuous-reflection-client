import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useApi } from 'hooks'
import { ProfessionalDevelopmentEntryForm } from './ProfessionalDevelopmentEntryForm'

export function EditProfessionalDevelopmentEntry({ entry }) {
  const { put } = useApi()
  let history = useHistory()
  const { id } = useParams()

  const handleSubmit = async request => {
    const mergedRequest = {
      professionalDevelopmentContent: {
        journalEntryAttributes: {
          journalId: id
        },
        ...request
      }
    }

    put(`professional_development_contents/${entry.content.id}`, mergedRequest).then(data => {
      history.push(`/journals/${id}/entries/${data.journalEntryId}`)
    })
  }

  return (
    <React.Fragment>
      <h1>Edit professional development entry</h1>
      <ProfessionalDevelopmentEntryForm handleSubmit={handleSubmit} content={entry.content} />
    </React.Fragment>
  )
}
