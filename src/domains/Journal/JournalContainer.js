import React, { useState, useEffect } from 'react'
import { Link, useParams, useHistory } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { Loading, PrimaryButton, Wrapper, PageHeader, ButtonAsLink, Modal } from '_shared'
import { EntryListItem } from './EntryListItem'

export function JournalContainer() {
  const { id } = useParams()
  const [journal, setJournal] = useState(null)
  const [showModal, setShowModal] = useState(false)
  const { get, del } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl(`journals/${id}`)
  let history = useHistory()

  useEffect(() => {
    get(url).then(data => {
      setJournal(data)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  const handleConfirmClick = async event => {
    event.preventDefault()
    del(url).then(() => {
      history.push('/journals')
    })
  }

  return !journal ? (
    <Loading />
  ) : (
    <Wrapper>
      <PageHeader>
        <div>
          <h1>{journal.name}</h1>
          <Link to={`/journals/${id}/edit`} className='text-xs'>
            Edit journal
          </Link>
          {'|'}
          <ButtonAsLink className='text-xs' handleClick={() => setShowModal(true)}>
            Delete journal
          </ButtonAsLink>
        </div>
        <Link
          to={{
            pathname: `/journals/${id}/entries/new`,
            state: {
              template: journal.template
            }
          }}
          className='no-underline'
        >
          <PrimaryButton>Add Entry</PrimaryButton>
        </Link>
      </PageHeader>

      <div>
        {journal.journalEntries.map(entry => (
          <EntryListItem key={entry.id} journalId={id} entry={entry} />
        ))}
      </div>

      {showModal && (
        <Modal
          primaryButtonText='Delete'
          handleCancelClick={() => setShowModal(false)}
          handleConfirmClick={handleConfirmClick}
        >
          <h2 className='text-center'>Are you sure you want to delete {journal.name}?</h2>
        </Modal>
      )}
    </Wrapper>
  )
}
