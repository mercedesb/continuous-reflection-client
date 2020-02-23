import React from 'react'

export function Button({ children, className, ...buttonProps }) {
  const classes = `${className} px-4 py-2 rounded-sm font-semibold text-xl shadow-md hover:shadow-lg no-underline flex items-center border border-2 border-transparent`
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
