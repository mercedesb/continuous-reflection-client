import React from 'react'

export function Button({ children, color, ...buttonProps }) {
  const classes = `bg-purple-300 px-4 py-2 rounded-sm text-black text-xl shadow-md hover:shadow-lg no-underline flex items-center ${color}`
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
