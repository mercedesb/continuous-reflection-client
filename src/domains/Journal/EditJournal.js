import React, { useState, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { FormButtons, Wrapper, PageHeader, TextInput } from '_shared'

export function EditJournal() {
  const { id } = useParams()
  const [name, setName] = useState('')
  let history = useHistory()
  let { get, put } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl(`journals/${id}`)

  useEffect(() => {
    get(url).then(data => {
      setName(data.name)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async e => {
    e.preventDefault()

    const request = {
      journal: {
        name
      }
    }

    put(url, request).then(data => {
      history.push(`/journals/${data.id}`)
    })
  }

  return (
    <Wrapper>
      <PageHeader>
        <h1>Edit journal</h1>
      </PageHeader>
      <form onSubmit={handleSubmit}>
        <TextInput
          label='Name'
          name='journalName'
          value={name}
          handleChange={e => setName(e.target.value)}
        />
        <FormButtons />
      </form>
    </Wrapper>
  )
}
