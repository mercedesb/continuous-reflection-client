import React from 'react'
import { InputLabel } from './InputLabel'
import { InputWrapper } from './InputWrapper'

export function TextInput({ handleChange, value, name, label }) {
  return (
    <InputWrapper>
      <InputLabel name={name} label={label} />
      <input
        className='border border-gray-600 rounded px-4 py-2 w-5/6'
        type='text'
        id={name}
        value={value}
        onChange={handleChange}
      />
    </InputWrapper>
  )
}
