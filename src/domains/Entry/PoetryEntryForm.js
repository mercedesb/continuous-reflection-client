import React, { useState, useEffect } from 'react'
import { FormButtons, TextArea, TextInput } from '_shared'

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
      <TextInput
        label='Title'
        name='title'
        value={title}
        handleChange={e => setTitle(e.target.value)}
      />
      <TextArea label='Poem' name='poem' value={poem} handleChange={e => setPoem(e.target.value)} />
      <FormButtons />
    </form>
  )
}
