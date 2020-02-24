import React from 'react'

export function DisplayLabel({ name, label }) {
  return (
    <label className='w-1/6 mr-4 break-words' htmlFor={name}>
      {label}
    </label>
  )
}
