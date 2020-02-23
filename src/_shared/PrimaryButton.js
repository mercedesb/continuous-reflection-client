import React from 'react'
import { Button } from './Button'

export function PrimaryButton({ children, className, ...buttonProps }) {
  return (
    <Button className={`bg-purple-600 text-white ${className}`} {...buttonProps}>
      {children}
    </Button>
  )
}
