import React from 'react'

export function InputLabel({ name, label, className }) {
  return (
    <label className={`mx-4 break-words ${className}`} htmlFor={name}>
      {label}
    </label>
  )
}
