import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { TokenProvider } from 'contexts'
import { AuthenticatedRoute, Login, TokenHandler, JournalListContainer } from 'domains'
import { Main } from './Main'

export default function App() {
  return (
    <TokenProvider>
      <BrowserRouter>
        <Switch>
          <AuthenticatedRoute path='/journals/:id' component={() => <div>Rendering journal</div>} />
          <AuthenticatedRoute path='/journals' component={JournalListContainer} />
          <Route path='/token'>
            <TokenHandler />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <AuthenticatedRoute path='/' component={Main} />
        </Switch>
      </BrowserRouter>
    </TokenProvider>
  )
}
