import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { apiClient } from 'utils'
import { ProfessionalDevelopmentEntryForm } from './ProfessionalDevelopmentEntryForm'

export function EditProfessionalDevelopmentEntry({ entry }) {
  let history = useHistory()
  const { id } = useParams()

  const handleSubmit = async request => {
    const mergedRequest = {
      professional_development_content: {
        journalEntryAttributes: {
          journalId: id
        },
        ...request
      }
    }

    apiClient
      .put(`professional_development_contents/${entry.content.id}`, mergedRequest, () =>
        history.push('/')
      )
      .then(data => {
        history.push(`/journals/${id}/entries/${data.journalEntryId}`)
      })
      .catch(console.log)
  }

  return (
    <React.Fragment>
      <h1>Edit professional development entry</h1>
      <ProfessionalDevelopmentEntryForm handleSubmit={handleSubmit} content={entry.content} />
    </React.Fragment>
  )
}
