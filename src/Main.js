import React from 'react'
import { Link } from 'react-router-dom'
import { Wrapper, Button } from '_shared'

export function Main(props) {
  return (
    <Wrapper>
      <Button color='bg-purple-600'>
        <Link to='/journals' className='no-underline'>
          Journals
        </Link>
      </Button>
    </Wrapper>
  )
}
