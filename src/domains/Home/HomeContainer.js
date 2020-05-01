import React, { useState, useEffect } from 'react'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { Wrapper, PageHeader, ButtonAsLink } from '_shared'
import { JournalCalendar } from './JournalCalendar'
import { MoodOverTime } from './MoodOverTime'
import { AddNewDashboardComponent } from './AddNewDashboardComponent'

export function HomeContainer() {
  const [loading, setLoading] = useState(true)
  const [showAddComponent, setShowAddComponent] = useState(false)
  const [dashboard, setDashboard] = useState({ components: [] })
  const [hasConfiguredDashboard, setHasConfiguredDashboard] = useState(false)
  const { get } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl(`dashboards`)

  useEffect(() => {
    get(url).then(data => {
      if (data && data.components && data.components.length > 0) {
        setDashboard(data)
        setHasConfiguredDashboard(true)
        setLoading(false)
      }
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  const handleAddComplete = newDashboardComponent => {
    const updatedDashboard = { ...dashboard }
    updatedDashboard.components.push(newDashboardComponent)
    setDashboard(updatedDashboard)
    setHasConfiguredDashboard(true)
    setShowAddComponent(false)
  }

  return (
    <Wrapper>
      <PageHeader>
        <h1>Welcome to Continuous Reflection!</h1>
      </PageHeader>
      <div className='mb-4 text-right'>
        <ButtonAsLink handleClick={() => setShowAddComponent(true)} className='text-xs'>
          Add dashboard component
        </ButtonAsLink>
      </div>
      {hasConfiguredDashboard &&
        dashboard.components.map(component => {
          if (component.componentType === 'JournalCalendar') {
            return <JournalCalendar journals={component.journals} />
          } else if (component.componentType === 'MoodOverTime') {
            return <MoodOverTime journals={component.journals} />
          } else return null
        })}
      {!hasConfiguredDashboard && (
        <div className='mb-4 px-24 py-12 italic bg-purple-100 rounded-sm'>
          <h2 className='h5'>
            Ohhh it looks like you haven't configured your dashboard yet. Be sure to add some
            components and configure what you want to see when you log in.
          </h2>
        </div>
      )}
      {showAddComponent && (
        <AddNewDashboardComponent
          handleCancelClick={() => setShowAddComponent(false)}
          handleAddComplete={handleAddComplete}
        />
      )}
    </Wrapper>
  )
}
