import React from 'react'
import { LinkAsButton, GithubIcon } from '_shared'

const AUTHORIZE_URL = 'https://github.com/login/oauth/authorize'
const SCOPE = 'user'

export function LoginWithGithub() {
  return (
    <div className='flex justify-center'>
      <LinkAsButton
        className='bg-white flex-initial'
        href={`${AUTHORIZE_URL}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&scope=${SCOPE}`}
      >
        <GithubIcon className='mr-2 text-black w-8 h-8' />
        Login with Github
      </LinkAsButton>
    </div>
  )
}
