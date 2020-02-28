import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { FormButtons, TextArea, TextInput, MoodsOptions, DatePicker } from '_shared'

export function ProfessionalDevelopmentEntryForm({ handleSubmit, content }) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState(moment().toDate())
  const [mood, setMood] = useState('')
  const [todayILearned, setTodayILearned] = useState('')
  const [goalProgress, setGoalProgress] = useState('')
  const [celebrations, setCelebrations] = useState('')

  useEffect(() => {
    if (!!content) {
      setTitle(content.title)
      if (!!content.entryDate) {
        setDate(moment(content.entryDate).toDate())
      } else {
        setDate(moment().toDate())
      }
      setMood(content.mood)
      setTodayILearned(content.todayILearned)
      setGoalProgress(content.goalProgress)
      setCelebrations(content.celebrations)
    }
  }, [content])

  const sendRequest = async e => {
    e.preventDefault()

    const request = {
      title,
      mood,
      todayILearned,
      goalProgress,
      celebrations,
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
      <MoodsOptions handleChange={e => setMood(e.target.value)} selectedMood={mood} />
      <TextArea
        label='Today I Learned'
        name='todayILearned'
        value={todayILearned}
        handleChange={e => setTodayILearned(e.target.value)}
      />
      <TextArea
        label='Goal Check-in'
        name='goalProgress'
        value={goalProgress}
        handleChange={e => setGoalProgress(e.target.value)}
      />
      <TextArea
        label='Celebrations'
        name='celebrations'
        value={celebrations}
        handleChange={e => setCelebrations(e.target.value)}
      />
      <FormButtons />
    </form>
  )
}
