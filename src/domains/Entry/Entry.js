import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApi } from 'hooks'
import { Loading, Button } from '_shared'
import { ProfessionalDevelopmentEntry } from './ProfessionalDevelopmentEntry'
import { PoetryEntry } from './PoetryEntry'

export function Entry() {
  const { id, entry_id } = useParams()
  const entry = useApi(`journal_entries/${entry_id}`)

  return !entry ? (
    <Loading />
  ) : (
    <React.Fragment>
      <h1>{entry.content.title}</h1>
      <Button color='purple-200'>
        <Link
          to={{
            pathname: `/journals/${id}/entries/${entry_id}/edit`
          }}
          className='no-underline'
        >
          Edit Entry
        </Link>
      </Button>
      {entry.content_type === 'ProfessionalDevelopmentContent' ? (
        <ProfessionalDevelopmentEntry entry={entry} />
      ) : (
        <PoetryEntry entry={entry} />
      )}
    </React.Fragment>
  )
}
