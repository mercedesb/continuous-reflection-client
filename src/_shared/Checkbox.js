import React from 'react'
import { InputLabel } from './InputLabel'

export function Checkbox({ handleChange, value, name, label, checked, ...props }) {
  return (
    <div className='flex items-center'>
      <input
        type='checkbox'
        id={name}
        value={value}
        checked={checked}
        onChange={handleChange}
        {...props}
      />
      <InputLabel name={name} label={label} />
    </div>
  )
}
