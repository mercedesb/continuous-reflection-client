import React from 'react'
import { useLocation } from 'react-router-dom'
import { MoodsProvider } from 'contexts'
import { Wrapper } from '_shared'
import { AddNewProfessionalDevelopmentEntry } from './AddNewProfessionalDevelopmentEntry'
import { AddNewPoetryEntry } from './AddNewPoetryEntry'

export function AddNewEntry() {
  const { state } = useLocation()
  const template = state ? state.template : ''

  return (
    <Wrapper>
      <MoodsProvider>
        {template === 'Professional Development' && <AddNewProfessionalDevelopmentEntry />}
        {template === 'Poetry' && <AddNewPoetryEntry />}
      </MoodsProvider>
    </Wrapper>
  )
}
