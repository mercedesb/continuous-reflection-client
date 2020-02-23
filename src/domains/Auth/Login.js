import React from 'react'
import { LoginWithGithub } from './LoginWithGithub'

export function Login() {
  return (
    <div className='bg-purple-600 absolute top-0 bottom-0 left-0 right-0'>
      <div className='absolute top-50 bottom-50 left-0 right-0'>
        <div className='flex flex-col mx-auto my-12 text-center'>
          <h1 className='text-white breathing mt-16 mb-32' style={{ fontSize: '8rem' }}>
            Continuous Reflection
          </h1>
          <LoginWithGithub />
        </div>
      </div>
    </div>
  )
}
