import React from 'react'

export function Wrapper({ children, className }) {
  const classes = `flex flex-col w-5/6 mx-auto my-12 ${className}`
  return <div className={classes}>{children}</div>
}
