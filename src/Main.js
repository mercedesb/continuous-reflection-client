import React from 'react'
import { TokenContext } from 'contexts'
import { Wrapper } from '_shared'
import { Switch, Route } from 'react-router-dom'

export function Main(props) {
  return (
    <Switch>
      {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
      <Route path='/journals/:id'>
        {/* <Journal /> */}
        <div>Rendering journal</div>
      </Route>
      <Route path='/journals'>
        {/* <JournalList /> */}
        <div>rendering list of journals</div>
      </Route>

      {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
      <Route path='/'>
        <TokenContext.Consumer>{token => <Wrapper>Main!</Wrapper>}</TokenContext.Consumer>
      </Route>
    </Switch>
  )
}
