import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { apiClient } from 'utils'
import { PoetryEntryForm } from './PoetryEntryForm'

export function AddNewPoetryEntry() {
  let history = useHistory()
  const { id } = useParams()

  const handleSubmit = async request => {
    const mergedRequest = {
      poetry_content: {
        journalEntryAttributes: {
          journalId: id
        },
        ...request
      }
    }

    apiClient
      .post('poetry_contents', mergedRequest, () => history.push('/'))
      .then(data => {
        history.push(`/journals/${id}/entries/${data.journalEntryId}`)
      })
      .catch(console.log)
  }
  return (
    <React.Fragment>
      <h1>Create poetry entry</h1>
      <PoetryEntryForm handleSubmit={handleSubmit} />
    </React.Fragment>
  )
}
