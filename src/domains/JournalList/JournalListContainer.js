import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { Loading, PrimaryButton, Wrapper, PageHeader } from '_shared'
import { JournalListItem } from './JournalListItem'

export function JournalListContainer() {
  const [journals, setJournals] = useState(null)
  const { get } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl('journals')

  useEffect(() => {
    get(url).then(data => {
      setJournals(data)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Wrapper>
      <PageHeader>
        Your journals{' '}
        <Link to='/journals/new' className='no-underline'>
          <PrimaryButton>Add Journal</PrimaryButton>
        </Link>
      </PageHeader>

      {!journals ? (
        <Loading />
      ) : (
        <div className='my-4'>
          {journals.map(j => (
            <JournalListItem key={j.id} journal={j} />
          ))}
        </div>
      )}
    </Wrapper>
  )
}
