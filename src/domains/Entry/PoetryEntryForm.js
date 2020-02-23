import React, { useState, useEffect } from 'react'
import { Button } from '_shared'

export function PoetryEntryForm({ handleSubmit, content }) {
  const [title, setTitle] = useState('')
  const [poem, setPoem] = useState('')

  useEffect(() => {
    if (!!content) {
      setTitle(content.title)
      setPoem(content.poem)
    }
  }, [content])

  const sendRequest = async e => {
    e.preventDefault()

    const request = {
      title,
      poem
    }

    handleSubmit(request)
  }

  return (
    <form onSubmit={sendRequest}>
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
  )
}
