import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApi } from 'hooks'
import { MoodsProvider } from 'contexts'
import { Loading, Wrapper } from '_shared'
import { EditProfessionalDevelopmentEntry } from './EditProfessionalDevelopmentEntry'
import { EditPoetryEntry } from './EditPoetryEntry'

export function EditEntry() {
  const { entry_id } = useParams()
  const [entry, setEntry] = useState(null)
  const { get } = useApi()

  useEffect(() => {
    get(`journal_entries/${entry_id}`).then(data => {
      setEntry(data)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Wrapper>
      <MoodsProvider>
        {!entry && <Loading />}
        {entry && entry.contentType === 'ProfessionalDevelopmentContent' && (
          <EditProfessionalDevelopmentEntry entry={entry} />
        )}
        {entry && entry.contentType === 'PoetryContent' && <EditPoetryEntry entry={entry} />}
      </MoodsProvider>
    </Wrapper>
  )
}
