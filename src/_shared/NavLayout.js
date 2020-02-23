import React from 'react'
import { Nav } from './Nav'

export function NavLayout({ children }) {
  return (
    <div className='flex h-screen'>
      <Nav />
      <div className='flex-1 overflow-scroll'>{children}</div>
    </div>
  )
}
