import React from 'react'

export function Button({ children, color, ...buttonProps }) {
  const classes = `${color} px-4 py-2 rounded-sm text-black text-xl shadow-md hover:shadow-lg no-underline flex items-center`
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
