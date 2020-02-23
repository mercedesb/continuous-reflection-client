import React from 'react'
import { Nav } from './Nav'

export function NavLayout({ children }) {
  return (
    <div className='flex py-4 px-4'>
      <Nav />
      <div className='my-4 mx-4 flex-1'>{children}</div>
    </div>
  )
}
