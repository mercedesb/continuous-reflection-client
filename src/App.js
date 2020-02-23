import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {
  AuthenticatedRoute,
  Login,
  TokenHandler,
  JournalListContainer,
  HomeContainer
} from 'domains'

export default function App() {
  return (
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
        <AuthenticatedRoute path='/' component={HomeContainer} />
      </Switch>
    </BrowserRouter>
  )
}
