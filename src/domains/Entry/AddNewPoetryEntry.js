import React, { useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { apiClient } from 'utils'
import { Button } from '_shared'

export function AddNewPoetryEntry() {
  const [title, setTitle] = useState('')
  const [poem, setPoem] = useState('')
  let history = useHistory()
  const { id } = useParams()

  const handleSubmit = async e => {
    e.preventDefault()

    const request = {
      poetry_content: {
        title,
        poem,
        journal_entry_attributes: {
          journal_id: id
        }
      }
    }

    apiClient
      .post('poetry_contents', request, () => history.push('/'))
      .then(data => {
        history.push(`/journals/${id}/entries/${data.id}`)
      })
      .catch(console.log)
  }
  return (
    <React.Fragment>
      <h1>Create poetry entry</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='title'>Title</label>
          <input type='text' id='title' value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label htmlFor='poem'>Poem</label>
          <textarea id='poem' value={poem} onChange={e => setPoem(e.target.value)} />
        </div>
        <Button type='submit' color='bg-purple-300'>
          Save
        </Button>
      </form>
    </React.Fragment>
  )
}
