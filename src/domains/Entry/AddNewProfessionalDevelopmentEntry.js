import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useApi } from 'hooks'
import { PageHeader } from '_shared'
import { ProfessionalDevelopmentEntryForm } from './ProfessionalDevelopmentEntryForm'

export function AddNewProfessionalDevelopmentEntry() {
  const { post } = useApi()
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

    post('professional_development_contents', mergedRequest).then(data => {
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
