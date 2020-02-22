import React from 'react'
import { Wrapper } from '_shared'
import { LoginWithGithub } from './LoginWithGithub'

export function Login() {
  return (
    <div className='bg-purple-600 absolute top-0 bottom-0 left-0 right-0'>
      <div className='absolute top-50 bottom-50 left-0 right-0'>
        <Wrapper>
          <h1 className='text-white' style={{ fontSize: '8rem' }}>
            Continuous Reflection
          </h1>
          <LoginWithGithub />
        </Wrapper>
      </div>
    </div>
  )
}
