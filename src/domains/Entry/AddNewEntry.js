import React from 'react'
import { useLocation } from 'react-router-dom'
import { AddNewProfessionalDevelopmentEntry } from './AddNewProfessionalDevelopmentEntry'
import { AddNewPoetryEntry } from './AddNewPoetryEntry'

export function AddNewEntry() {
  const { state } = useLocation()
  const template = state ? state.template : ''

  if (template === 'Professional Development') {
    return <AddNewProfessionalDevelopmentEntry />
  } else if (template === 'Poetry') {
    return <AddNewPoetryEntry />
  } else {
    return null
  }
}
