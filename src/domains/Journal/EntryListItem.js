import React from 'react'
import { Link } from 'react-router-dom'

export function EntryListItem({ journalId, entry }) {
  return (
    <div>
      <Link to={`/journals/${journalId}/entries/${entry.id}`}>{entry.title}</Link>
    </div>
  )
}
