import React from 'react'
import { Link } from 'react-router-dom'
import { useApi } from 'hooks'
import { Loading, PrimaryButton, Wrapper } from '_shared'
import { JournalListItem } from './JournalListItem'

export function JournalListContainer() {
  const journals = useApi('journals')

  return (
    <Wrapper>
      <h1 className='mb-8 flex items-center justify-between'>
        Your journals{' '}
        <PrimaryButton>
          <Link to='/journals/new' className='no-underline'>
            Add Journal
          </Link>
        </PrimaryButton>
      </h1>

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
