import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useApi } from 'react-use-fetch-api'
import { useApiUrl, useErrorHandler, useUnauthorizedHandler } from 'hooks'
import { Loading, Wrapper } from '_shared'
import { EditProfessionalDevelopmentEntry } from './EditProfessionalDevelopmentEntry'
import { EditPoetryEntry } from './EditPoetryEntry'

export function EditEntry() {
  const { entryId } = useParams()
  const [entry, setEntry] = useState(null)
  const { get } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl(`journal_entries/${entryId}`)

  useEffect(() => {
    get(url).then(data => {
      setEntry(data)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Wrapper>
      {!entry && <Loading />}
      {entry && entry.contentType === 'ProfessionalDevelopmentContent' && (
        <EditProfessionalDevelopmentEntry entry={entry} />
      )}
      {entry && entry.contentType === 'PoetryContent' && <EditPoetryEntry entry={entry} />}
    </Wrapper>
  )
}
