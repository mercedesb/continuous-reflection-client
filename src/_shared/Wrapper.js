import React from 'react'

export function Wrapper({ children, className }) {
  const classes = `flex flex-col w-3/4 mx-auto my-12 items-center ${className}`
  return <div className={classes}>{children}</div>
}
