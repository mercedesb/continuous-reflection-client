import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { LONG_DATE_FORMAT } from 'utils'

export function EntryListItem({ journalId, entry }) {
  return (
    <Link to={`/journals/${journalId}/entries/${entry.id}`} className='no-underline'>
      <div className='my-4 border rounded px-8 py-4 border-gray-400'>
        <h2>{entry.title}</h2>
        <p className='italic text-xs'>{moment(entry.entryDate).format(LONG_DATE_FORMAT)}</p>
      </div>
    </Link>
  )
}
