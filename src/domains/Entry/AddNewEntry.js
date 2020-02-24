import React from 'react'
import { useLocation } from 'react-router-dom'
import { Wrapper } from '_shared'
import { AddNewProfessionalDevelopmentEntry } from './AddNewProfessionalDevelopmentEntry'
import { AddNewPoetryEntry } from './AddNewPoetryEntry'

export function AddNewEntry() {
  const { state } = useLocation()
  const template = state ? state.template : ''

  return (
    <Wrapper>
      {template === 'Professional Development' && <AddNewProfessionalDevelopmentEntry />}
      {template === 'Poetry' && <AddNewPoetryEntry />}
    </Wrapper>
  )
}
