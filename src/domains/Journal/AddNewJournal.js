import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { FormButtons, Wrapper, PageHeader, TextInput, RadioToggle } from '_shared'

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
        <div role='group' aria-labelledby='template-label' className='flex items-center p-4'>
          <div id='template-label' className='w-1/6 mx-4 break-words'>
            Journal type
          </div>
          <div className='flex px-4 py-2 w-5/6 flex-wrap text-center'>
            <div className='mr-4 mb-4'>
              <RadioToggle
                title='template'
                name='professionalDevelopment'
                value='Professional Development'
                checked={template === 'Professional Development'}
                label='Professional Development'
                handleChange={e => setTemplate(e.target.value)}
              />
            </div>
            <div className='mr-4 mb-4'>
              <RadioToggle
                title='template'
                name='poetry'
                value='Poetry'
                checked={template === 'Poetry'}
                label='Poetry'
                handleChange={e => setTemplate(e.target.value)}
              />
            </div>
          </div>
        </div>
        <FormButtons />
      </form>
    </Wrapper>
  )
}
