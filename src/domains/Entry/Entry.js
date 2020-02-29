import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import moment from 'moment'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { DATE_FORMAT } from 'utils'
import { Loading, PrimaryButton, Wrapper, PageHeader, DisplayField } from '_shared'
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
        <Link
          to={{
            pathname: `/journals/${id}/entries/${entry_id}/edit`
          }}
          className='no-underline'
        >
          <PrimaryButton>Edit Entry</PrimaryButton>
        </Link>
      </PageHeader>
      <DisplayField
        label='Date'
        name='date'
        value={moment(entry.content.entryDate).format(DATE_FORMAT)}
      />

      {entry.contentType === 'ProfessionalDevelopmentContent' ? (
        <ProfessionalDevelopmentEntry entry={entry} />
      ) : (
        <PoetryEntry entry={entry} />
      )}
    </Wrapper>
  )
}
