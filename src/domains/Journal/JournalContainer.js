import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApi } from 'hooks'
import { Loading, PrimaryButton, Wrapper, PageHeader } from '_shared'
import { EntryListItem } from './EntryListItem'

export function JournalContainer() {
  const { id } = useParams()
  const [journal, setJournal] = useState(null)
  const { get } = useApi()

  useEffect(() => {
    get(`journals/${id}`).then(data => {
      setJournal(data)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return !journal ? (
    <Loading />
  ) : (
    <Wrapper>
      <PageHeader>
        {journal.name}
        <PrimaryButton>
          <Link
            to={{
              pathname: `/journals/${id}/entries/new`,
              state: {
                template: journal.template
              }
            }}
            className='no-underline'
          >
            Add Entry
          </Link>
        </PrimaryButton>
      </PageHeader>

      <div>
        {journal.journalEntries.map(entry => (
          <EntryListItem key={entry.id} journalId={id} entry={entry} />
        ))}
      </div>
    </Wrapper>
  )
}
