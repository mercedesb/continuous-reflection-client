import React from 'react'

export function InputLabel({ name, label }) {
  return (
    <label className='w-1/6 mx-4 break-words' htmlFor={name}>
      {label}
    </label>
  )
}
