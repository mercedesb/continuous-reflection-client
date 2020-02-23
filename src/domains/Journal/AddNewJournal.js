import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { apiClient } from 'utils'
import { PrimaryButton } from '_shared'

export function AddNewJournal() {
  const [name, setName] = useState('')
  const [template, setTemplate] = useState('')
  let history = useHistory()

  const handleSubmit = async e => {
    e.preventDefault()

    const request = {
      journal: {
        name,
        template
      }
    }

    apiClient
      .post('journals', request)
      .then(data => {
        history.push(`/journals/${data.id}`)
      })
      .catch(console.log)
  }

  return (
    <React.Fragment>
      <h1>Create journal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='journalName'>Name</label>
          <input
            type='text'
            id='journalName'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
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
        <PrimaryButton type='submit' color='bg-purple-300'>
          Save
        </PrimaryButton>
      </form>
    </React.Fragment>
  )
}
