import React from 'react'
import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <div className='flex flex-col flex-initial'>
      <Link to='/' className='no-underline my-4 mx-4'>
        Home
      </Link>
      <Link to='/journals' className='no-underline my-4 mx-4'>
        Journals
      </Link>
      <Link to='/profile' className='no-underline my-4 mx-4'>
        Profile
      </Link>
      <Link to='/sign-out' className='no-underline my-4 mx-4'>
        Sign out
      </Link>
    </div>
  )
}
