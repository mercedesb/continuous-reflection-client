import React from 'react'
import { Button } from './Button'

export function SecondaryButton({ children, className, ...buttonProps }) {
  return (
    <Button className={`bg-purple-100 text-black border-purple-600 ${className}`} {...buttonProps}>
      {children}
    </Button>
  )
}
