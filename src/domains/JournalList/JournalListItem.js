import React from 'react'
import { Link } from 'react-router-dom'

export function JournalListItem({ journal }) {
  return (
    <div>
      <Link to={`/journals/${journal.id}`}>{journal.name}</Link>
    </div>
  )
}
