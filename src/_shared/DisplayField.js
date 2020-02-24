import React from 'react'
import { DisplayLabel } from './DisplayLabel'
import { DisplayWrapper } from './DisplayWrapper'

export function DisplayField({ value, name, label }) {
  return (
    <DisplayWrapper>
      <DisplayLabel name={name} label={label} />
      <p id={name} className='px-4 py-2 w-5/6'>
        {value}
      </p>
    </DisplayWrapper>
  )
}
