import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { PoetryEntryForm } from './PoetryEntryForm'

export function AddNewPoetryEntry() {
  const { id } = useParams()
  let history = useHistory()
  const { post } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl('poetry_contents')

  const handleSubmit = async request => {
    const mergedRequest = {
      poetryContent: {
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
      <h1>Create poetry entry</h1>
      <PoetryEntryForm handleSubmit={handleSubmit} />
    </React.Fragment>
  )
}
