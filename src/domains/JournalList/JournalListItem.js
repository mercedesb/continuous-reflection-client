import React from 'react'
import { Link } from 'react-router-dom'

export function JournalListItem({ journal }) {
  return (
    <div className='my-4'>
      <Link to={`/journals/${journal.id}`}>{journal.name}</Link>
    </div>
  )
}
