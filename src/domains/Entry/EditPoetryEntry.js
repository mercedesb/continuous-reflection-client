import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { PoetryEntryForm } from './PoetryEntryForm'

export function EditPoetryEntry({ entry }) {
  const { id } = useParams()
  let history = useHistory()
  const { put } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl(`poetry_contents/${entry.content.id}`)

  const handleSubmit = async request => {
    const mergedRequest = {
      poetryContent: {
        journalEntryAttributes: {
          journalId: id
        },
        ...request
      }
    }

    put(url, mergedRequest).then(data => {
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
