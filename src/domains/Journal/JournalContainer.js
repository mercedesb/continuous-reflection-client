import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApi } from 'hooks'
import { Loading, PrimaryButton, Wrapper } from '_shared'
import { EntryListItem } from './EntryListItem'

export function JournalContainer() {
  const { id } = useParams()
  const journal = useApi(`journals/${id}`)

  return !journal ? (
    <Loading />
  ) : (
    <Wrapper>
      <h1 className='mb-8 flex items-center justify-between'>
        {journal.name}
        <PrimaryButton>
          <Link
            to={{
              pathname: `/journals/${id}/entries/new`,
              state: {
                template: journal.template
              }
            }}
          >
            Add Entry
          </Link>
        </PrimaryButton>
      </h1>

      <div>
        {journal.journalEntries.map(entry => (
          <EntryListItem key={entry.id} journalId={id} entry={entry} />
        ))}
      </div>
    </Wrapper>
  )
}
