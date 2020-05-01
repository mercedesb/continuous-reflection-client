import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useApi } from 'react-use-fetch-api'
import { SHORT_DATE_FORMAT } from 'utils'
import { useApiUrl, useUnauthorizedHandler, useErrorHandler } from 'hooks'
import { CalendarChart } from './CalendarChart'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export function JournalCalendar({ journals }) {
  const [entries, setEntries] = useState([])
  const { get } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl(`home/journal_entries?journal_ids=${journals.map(j => j.id).join(',')}`)

  useEffect(() => {
    get(url).then(data => {
      setEntries(data)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  const getCalendarData = () => {
    return entries.reduce((data, entry) => {
      const dateKey = moment(entry.content.entryDate).format(SHORT_DATE_FORMAT)
      const alreadyExistingDate = data.find(d => d.day === dateKey)
      if (alreadyExistingDate) {
        alreadyExistingDate.value += 1
      } else {
        data.push({ day: dateKey, value: 1 })
      }

      return data
    }, [])
  }

  const getJournalNames = () => {
    return [...new Set(entries.map(e => e.journal).map(j => j.name))]
  }

  return (
    <div className='h-64 mb-4'>
      <h2>Your writing history for {getJournalNames().join(', ')}</h2>
      <CalendarChart data={getCalendarData()} />
    </div>
  )
}
