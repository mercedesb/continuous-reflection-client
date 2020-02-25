import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useApi } from 'hooks'
import { PoetryEntryForm } from './PoetryEntryForm'

export function EditPoetryEntry({ entry }) {
  const { put } = useApi()
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

    put(`poetry_contents/${entry.content.id}`, mergedRequest).then(data => {
      history.push(`/journals/${id}/entries/${data.journalEntryId}`)
    })
  }
  return (
    <React.Fragment>
      <h1>Edit poetry entry</h1>
      <PoetryEntryForm handleSubmit={handleSubmit} content={entry.content} />
    </React.Fragment>
  )
}
