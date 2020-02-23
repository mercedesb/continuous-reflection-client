import React, { useState, useEffect } from 'react'
import { Button } from '_shared'

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
      <div>
        <label htmlFor='title'>Title</label>
        <input type='text' id='title' value={title} onChange={e => setTitle(e.target.value)} />
      </div>
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
      <div>
        <label htmlFor='todayILearned'>Today I Learned</label>
        <textarea
          id='todayILearned'
          value={todayILearned}
          onChange={e => setTodayILearned(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='goalProgress'>Goal Check-in</label>
        <textarea
          id='goalProgress'
          value={goalProgress}
          onChange={e => setGoalProgress(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor='celebrations'>Celebrations</label>
        <textarea
          id='celebrations'
          value={celebrations}
          onChange={e => setCelebrations(e.target.value)}
        />
      </div>
      <Button type='submit' color='bg-purple-300'>
        Save
      </Button>
    </form>
  )
}
