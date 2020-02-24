import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { apiClient } from 'utils'
import { PageHeader } from '_shared'
import { ProfessionalDevelopmentEntryForm } from './ProfessionalDevelopmentEntryForm'

export function AddNewProfessionalDevelopmentEntry() {
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

    apiClient
      .post('professional_development_contents', mergedRequest, () => history.push('/'))
      .then(data => {
        history.push(`/journals/${id}/entries/${data.journalEntryId}`)
      })
      .catch(console.log)
  }

  return (
    <React.Fragment>
      <PageHeader>Create professional development entry</PageHeader>
      <ProfessionalDevelopmentEntryForm handleSubmit={handleSubmit} />
    </React.Fragment>
  )
}
