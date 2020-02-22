import React from 'react'

export function LinkButton({ children, color, ...linkProps }) {
  const classes = `${color} px-4 py-2 rounded-sm text-black text-xl shadow-md hover:shadow-lg no-underline flex items-center`
  return (
    <a className={classes} {...linkProps}>
      {children}
    </a>
  )
}
