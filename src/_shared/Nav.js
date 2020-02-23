import React from 'react'
import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <nav className='flex flex-initial items-center w-1/6 py-4 px-4 bg-purple-600 text-white'>
      <div className='flex flex-col flex-1'>
        <Link to='/' className='no-underline my-4 mx-4 font-semibold text-xl'>
          Home
        </Link>
        <Link to='/journals' className='no-underline my-4 mx-4 font-semibold text-xl'>
          Journals
        </Link>
        <Link to='/profile' className='no-underline my-4 mx-4 font-semibold text-xl'>
          Profile
        </Link>
        <Link to='/sign-out' className='no-underline my-4 mx-4 font-semibold text-xl'>
          Sign out
        </Link>
      </div>
    </nav>
  )
}
