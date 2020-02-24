import React, { useState, useEffect } from 'react'
import { FormButtons, TextArea, TextInput, MoodsOptions } from '_shared'

export function ProfessionalDevelopmentEntryForm({ handleSubmit, content }) {
  const [title, setTitle] = useState('')
  const [mood, setMood] = useState('')
  const [todayILearned, setTodayILearned] = useState('')
  const [goalProgress, setGoalProgress] = useState('')
  const [celebrations, setCelebrations] = useState('')

  useEffect(() => {
    if (!!content) {
      setTitle(content.title)
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
      celebrations
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
      <MoodsOptions handleChange={e => setMood(e.target.value)} />
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
