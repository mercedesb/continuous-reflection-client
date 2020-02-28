import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { FormButtons, TextArea, TextInput, DatePicker } from '_shared'

export function PoetryEntryForm({ handleSubmit, content }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(moment().toDate())
  const [poem, setPoem] = useState('')

  useEffect(() => {
    if (!!content) {
      setTitle(content.title)
      if (!!content.entryDate) {
        setDate(moment(content.entryDate).toDate())
      } else {
        setDate(moment().toDate())
      }
      setPoem(content.poem)
    }
  }, [content])

  const sendRequest = async e => {
    e.preventDefault()

    const request = {
      title,
      poem,
      journalEntryAttributes: {
        entryDate: date
      }
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
      <DatePicker value={date} handleChange={day => setDate(day)} />
      <TextArea label='Poem' name='poem' value={poem} handleChange={e => setPoem(e.target.value)} />
      <FormButtons />
    </form>
  )
}
