import React, { useState, useEffect } from 'react'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { RadioToggle, Checkbox, FormButtons } from '_shared'

export function AddNewDashboardComponent({ handleAddComplete, handleCancelClick }) {
  const [componentType, setComponentType] = useState('')
  const [selectedJournals, setSelectedJournals] = useState([])

  const [journals, setJournals] = useState(null)
  const { get, post } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const journalsUrl = useApiUrl('journals')
  const dashboardComponentsUrl = useApiUrl('dashboard_components')

  useEffect(() => {
    get(journalsUrl).then(data => {
      setJournals(data)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  const handleSelectedJournalChange = e => {
    const journalId = parseInt(e.target.value)
    const includedInCurrentSelections = selectedJournals.includes(journalId)
    let updatedSelections = [...selectedJournals]

    if (e.target.checked && !includedInCurrentSelections) {
      updatedSelections.push(journalId)
    } else if (!e.target.checked && includedInCurrentSelections) {
      updatedSelections = updatedSelections.filter(s => s !== journalId)
    }

    setSelectedJournals(updatedSelections)
  }

  const sendRequest = async e => {
    e.preventDefault()
    const request = {
      dashboardComponent: {
        journalIds: selectedJournals,
        componentType: componentType,
        position: 0
      }
    }

    post(dashboardComponentsUrl, request).then(data => {
      handleAddComplete(data)
    })
  }

  return (
    <form onSubmit={sendRequest}>
      <div role='group' aria-labelledby='component-type-label' className='flex items-center p-4'>
        <div id='component-type-label' className='w-1/6 mx-4 break-words'>
          Component type
        </div>
        <div className='flex px-4 py-2 w-5/6 flex-wrap'>
          <div className='mr-4 mb-4'>
            <RadioToggle
              title='componentType'
              id='JournalCalendar'
              value='JournalCalendar'
              checked={componentType === 'JournalCalendar'}
              label='Journal entry calendar'
              handleChange={e => setComponentType(e.target.value)}
            />
          </div>
          <div className='mr-4 mb-4'>
            <RadioToggle
              title='componentType'
              id='MoodOverTime'
              value='MoodOverTime'
              checked={componentType === 'MoodOverTime'}
              label='Chart your mood over time'
              handleChange={e => setComponentType(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div role='group' aria-labelledby='journals-label' className='flex items-center p-4'>
        <div id='journals-label' className='w-1/6 mx-4 break-words'>
          Journals for data
        </div>
        <div className='flex px-4 py-2 w-5/6 flex-wrap'>
          {journals &&
            journals.map(journal => (
              <Checkbox
                name={journal.id}
                value={journal.id}
                checked={selectedJournals.includes(journal.id)}
                label={journal.name}
                handleChange={handleSelectedJournalChange}
              />
            ))}
        </div>
      </div>
      <FormButtons handleCancelClick={handleCancelClick} />
    </form>
  )
}
