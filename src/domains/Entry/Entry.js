import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MoodsProvider } from 'contexts'
import { useApi } from 'hooks'
import { Loading, PrimaryButton, Wrapper, PageHeader } from '_shared'
import { ProfessionalDevelopmentEntry } from './ProfessionalDevelopmentEntry'
import { PoetryEntry } from './PoetryEntry'

export function Entry() {
  const { id, entry_id } = useParams()
  const [entry, setEntry] = useState(null)
  const { get } = useApi()

  useEffect(() => {
    get(`journal_entries/${entry_id}`).then(data => {
      setEntry(data)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return !entry ? (
    <Loading />
  ) : (
    <Wrapper>
      <div className='mb-8'>
        <Link to={`/journals/${id}`}>{'<'} Back to entries</Link>
      </div>
      <PageHeader>
        {entry.content.title}
        <PrimaryButton>
          <Link
            to={{
              pathname: `/journals/${id}/entries/${entry_id}/edit`
            }}
            className='no-underline'
          >
            Edit Entry
          </Link>
        </PrimaryButton>
      </PageHeader>
      <MoodsProvider>
        {entry.contentType === 'ProfessionalDevelopmentContent' ? (
          <ProfessionalDevelopmentEntry entry={entry} />
        ) : (
          <PoetryEntry entry={entry} />
        )}
      </MoodsProvider>
    </Wrapper>
  )
}
