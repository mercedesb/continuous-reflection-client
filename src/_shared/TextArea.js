import React from 'react'
import { InputLabel } from './InputLabel'
import { InputWrapper } from './InputWrapper'

export function TextArea({ handleChange, value, name, label }) {
  return (
    <InputWrapper>
      <InputLabel name={name} label={label} className='w-1/6' />
      <textarea
        className='border border-gray-600 rounded px-4 py-2 w-5/6'
        id={name}
        value={value}
        onChange={handleChange}
      />
    </InputWrapper>
  )
}
