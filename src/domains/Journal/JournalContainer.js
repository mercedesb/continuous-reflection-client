import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { useApi } from 'hooks'
import { Loading, Button } from '_shared'

export function JournalContainer() {
  const { id } = useParams()
  const journal = useApi(`journals/${id}`)

  return !journal ? (
    <Loading />
  ) : (
    <React.Fragment>
      <h1>{journal.name}</h1>
      <Button color='purple-200'>
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
      </Button>
      <div>
        {journal.journalEntries.map(entry => (
          <Link to={`/journals/${id}/entries/${entry.id}`}>{entry.title}</Link>
        ))}
      </div>
    </React.Fragment>
  )
}
