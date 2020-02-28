import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { PageHeader } from '_shared'
import { ProfessionalDevelopmentEntryForm } from './ProfessionalDevelopmentEntryForm'

export function AddNewProfessionalDevelopmentEntry() {
  const { id } = useParams()
  let history = useHistory()
  const { post } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl('professional_development_contents')

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

    post(url, mergedRequest).then(data => {
      history.push(`/journals/${id}/entries/${data.journalEntryId}`)
    })
  }

  return (
    <React.Fragment>
      <PageHeader>Create professional development entry</PageHeader>
      <ProfessionalDevelopmentEntryForm handleSubmit={handleSubmit} />
    </React.Fragment>
  )
}
