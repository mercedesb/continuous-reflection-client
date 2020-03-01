import React from 'react'

export function ButtonAsLink({ children, handleClick, className }) {
  return (
    <button className={`underline ${className}`} onClick={handleClick}>
      {children}
    </button>
  )
}
