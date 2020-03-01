import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { DATE_FORMAT } from 'utils'

export function JournalListItem({ journal }) {
  const hasEntries = journal.journalEntries && journal.journalEntries.length > 0

  return (
    <Link to={`/journals/${journal.id}`} className='no-underline'>
      <div className='my-4 border rounded px-8 py-4 border-gray-400 flex'>
        <div className='flex-1'>
          <h2>{journal.name}</h2>
          <p className='my-4 font-semibold'>{journal.template} Journal</p>
          {hasEntries && (
            <p className='italic text-xs'>
              Lastest entry: {moment(journal.journalEntries[0].entryDate).format(DATE_FORMAT)}
            </p>
          )}
        </div>
        <div className='flex-1'>
          <p className='my-4 text-right'>
            {hasEntries ? journal.journalEntries.length : 0} Entries
          </p>
        </div>
      </div>
    </Link>
  )
}
