import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { Loading, PrimaryButton, Wrapper, PageHeader } from '_shared'
import { ProfessionalDevelopmentEntry } from './ProfessionalDevelopmentEntry'
import { PoetryEntry } from './PoetryEntry'

export function Entry() {
  const { id, entry_id } = useParams()
  const [entry, setEntry] = useState(null)
  const { get } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl(`journal_entries/${entry_id}`)

  useEffect(() => {
    get(url).then(data => {
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

      {entry.contentType === 'ProfessionalDevelopmentContent' ? (
        <ProfessionalDevelopmentEntry entry={entry} />
      ) : (
        <PoetryEntry entry={entry} />
      )}
    </Wrapper>
  )
}
