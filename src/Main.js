import React from 'react'
import { TokenContext } from 'contexts'
import { Wrapper } from '_shared'

export function Main(props) {
  return <TokenContext.Consumer>{token => <Wrapper>Main!</Wrapper>}</TokenContext.Consumer>
}
