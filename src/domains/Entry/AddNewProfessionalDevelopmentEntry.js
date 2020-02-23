import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { apiClient } from 'utils'
import { ProfessionalDevelopmentEntryForm } from './ProfessionalDevelopmentEntryForm'

export function AddNewProfessionalDevelopmentEntry() {
  let history = useHistory()
  const { id } = useParams()

  const handleSubmit = async request => {
    const mergedRequest = {
      journal_entry_attributes: {
        journal_id: id
      },
      ...request
    }

    apiClient
      .post('professional_development_contents', mergedRequest, () => history.push('/'))
      .then(data => {
        history.push(`/journals/${id}/entries/${data.id}`)
      })
      .catch(console.log)
  }

  return (
    <React.Fragment>
      <h1>Create professional development entry</h1>
      <ProfessionalDevelopmentEntryForm handleSubmit={handleSubmit} />
    </React.Fragment>
  )
}
