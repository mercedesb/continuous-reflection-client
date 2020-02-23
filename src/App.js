import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {
  AddNewEntry,
  AddNewJournal,
  AuthenticatedRoute,
  HomeContainer,
  JournalContainer,
  JournalListContainer,
  Login,
  TokenHandler
} from 'domains'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <AuthenticatedRoute path='/journals/:id/entries/new' component={AddNewEntry} />
        <AuthenticatedRoute
          path='/journals/:id/entries/:id'
          component={() => <div>rendering entry</div>}
        />
        <AuthenticatedRoute path='/journals/new' component={AddNewJournal} />
        <AuthenticatedRoute path='/journals/:id' component={JournalContainer} />
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
