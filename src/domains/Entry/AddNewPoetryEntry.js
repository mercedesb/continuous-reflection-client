import React from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useApi } from 'hooks'
import { PoetryEntryForm } from './PoetryEntryForm'

export function AddNewPoetryEntry() {
  const { post } = useApi()
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

    post('poetry_contents', mergedRequest).then(data => {
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
