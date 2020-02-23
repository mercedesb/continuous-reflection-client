import React, { useState, useEffect } from 'react'
import { FormButtons, TextArea, TextInput } from '_shared'

export function ProfessionalDevelopmentEntryForm({ handleSubmit, content }) {
  const [title, setTitle] = useState()
  const [mood, setMood] = useState()
  const [todayILearned, setTodayILearned] = useState()
  const [goalProgress, setGoalProgress] = useState()
  const [celebrations, setCelebrations] = useState()

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
      <div>
        <input
          type='radio'
          title='mood'
          id='cheerful'
          value='cheerful'
          checked={mood === 'cheerful'}
          onChange={e => setMood(e.target.value)}
        />
        <label htmlFor='cheerful'>Cheerful</label>
      </div>
      <div>
        <input
          type='radio'
          title='mood'
          id='hopeful'
          value='hopeful'
          checked={mood === 'hopeful'}
          onChange={e => setMood(e.target.value)}
        />
        <label htmlFor='hopeful'>Hopeful</label>
      </div>
      <div>
        <input
          type='radio'
          title='mood'
          id='ok'
          value='ok'
          checked={mood === 'ok'}
          onChange={e => setMood(e.target.value)}
        />
        <label htmlFor='ok'>Ok</label>
      </div>
      <div>
        <input
          type='radio'
          title='mood'
          id='meh'
          value='meh'
          checked={mood === 'meh'}
          onChange={e => setMood(e.target.value)}
        />
        <label htmlFor='meh'>Meh</label>
      </div>
      <div>
        <input
          type='radio'
          title='mood'
          id='gloomy'
          value='gloomy'
          checked={mood === 'gloomy'}
          onChange={e => setMood(e.target.value)}
        />
        <label htmlFor='gloomy'>Gloomy</label>
      </div>
      <div>
        <input
          type='radio'
          title='mood'
          id='stressed'
          value='stressed'
          checked={mood === 'stressed'}
          onChange={e => setMood(e.target.value)}
        />
        <label htmlFor='stressed'>Stressed</label>
      </div>
      <div>
        <input
          type='radio'
          title='mood'
          id='angry'
          value='angry'
          checked={mood === 'angry'}
          onChange={e => setMood(e.target.value)}
        />
        <label htmlFor='angry'>Angry</label>
      </div>
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
