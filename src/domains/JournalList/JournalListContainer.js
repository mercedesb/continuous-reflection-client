import React from 'react'
import { Link } from 'react-router-dom'
import { useApi } from 'hooks'
import { Loading, PrimaryButton, Wrapper, PageHeader } from '_shared'
import { JournalListItem } from './JournalListItem'

export function JournalListContainer() {
  const journals = useApi('journals')

  return (
    <Wrapper>
      <PageHeader>
        Your journals{' '}
        <PrimaryButton>
          <Link to='/journals/new' className='no-underline'>
            Add Journal
          </Link>
        </PrimaryButton>
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
