import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { apiClient } from 'utils'
import { PoetryEntryForm } from './PoetryEntryForm'

export function EditPoetryEntry({ entry }) {
  let history = useHistory()
  const { id } = useParams()

  const handleSubmit = async request => {
    const mergedRequest = {
      poetryContent: {
        journalEntryAttributes: {
          journalId: id
        },
        ...request
      }
    }

    apiClient
      .put(`poetry_contents/${entry.content.id}`, mergedRequest, () => history.push('/'))
      .then(data => {
        history.push(`/journals/${id}/entries/${data.journalEntryId}`)
      })
      .catch(console.log)
  }
  return (
    <React.Fragment>
      <h1>Edit poetry entry</h1>
      <PoetryEntryForm handleSubmit={handleSubmit} content={entry.content} />
    </React.Fragment>
  )
}
