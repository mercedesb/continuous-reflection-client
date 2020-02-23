import React from 'react'
import { useLocation } from 'react-router-dom'
import { AddNewProfessionalDevelopmentEntry } from './AddNewProfessionalDevelopmentEntry'
import { AddNewPoetryEntry } from './AddNewPoetryEntry'

export function AddNewEntry() {
  const { state } = useLocation()
  const { template } = state
  return template === 'Professional Development' ? (
    <AddNewProfessionalDevelopmentEntry />
  ) : (
    <AddNewPoetryEntry />
  )
}
