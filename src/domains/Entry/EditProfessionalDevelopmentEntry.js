import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { ProfessionalDevelopmentEntryForm } from './ProfessionalDevelopmentEntryForm'

export function EditProfessionalDevelopmentEntry({ entry }) {
  const { id } = useParams()
  let history = useHistory()
  const { put } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl(`professional_development_contents/${entry.content.id}`)

  const handleSubmit = async request => {
    const mergedRequest = {
      professionalDevelopmentContent: {
        ...request,
        journalEntryAttributes: {
          ...request.journalEntryAttributes,
          journalId: id
        }
      }
    }

    put(url, mergedRequest).then(data => {
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
