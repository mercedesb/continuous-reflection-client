import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { FormButtons, Wrapper, PageHeader, TextInput } from '_shared'

export function AddNewJournal() {
  const [name, setName] = useState('')
  const [template, setTemplate] = useState('')
  let history = useHistory()
  let { post } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl('journals')

  const handleSubmit = async e => {
    e.preventDefault()

    const request = {
      journal: {
        name,
        template
      }
    }

    post(url, request).then(data => {
      history.push(`/journals/${data.id}`)
    })
  }

  return (
    <Wrapper>
      <PageHeader>
        <h1>Create journal</h1>
      </PageHeader>
      <form onSubmit={handleSubmit}>
        <TextInput
          label='Name'
          name='journalName'
          value={name}
          handleChange={e => setName(e.target.value)}
        />

        <div>
          <input
            type='radio'
            name='template'
            id='professionalDevelopment'
            value='Professional Development'
            checked={template === 'Professional Development'}
            onChange={e => setTemplate(e.target.value)}
          />
          <label htmlFor='professionalDevelopment'>Professional Development</label>
        </div>
        <div>
          <input
            type='radio'
            name='template'
            id='poetry'
            value='Poetry'
            checked={template === 'Poetry'}
            onChange={e => setTemplate(e.target.value)}
          />
          <label htmlFor='poetry'>Poetry</label>
        </div>
        <FormButtons />
      </form>
    </Wrapper>
  )
}
