import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { MoodsProvider } from 'contexts'
import {
  AddNewEntry,
  AddNewJournal,
  AuthenticatedRoute,
  EditEntry,
  Entry,
  HomeContainer,
  JournalContainer,
  JournalListContainer,
  Login,
  SignOut,
  TokenHandler
} from 'domains'

export default function App() {
  return (
    <BrowserRouter>
      <MoodsProvider>
        <Switch>
          <AuthenticatedRoute path='/journals/:id/entries/:entryId/edit' component={EditEntry} />
          <AuthenticatedRoute path='/journals/:id/entries/new' component={AddNewEntry} />
          <AuthenticatedRoute path='/journals/:id/entries/:entryId' component={Entry} />
          <AuthenticatedRoute path='/journals/new' component={AddNewJournal} />
          <AuthenticatedRoute path='/journals/:id' component={JournalContainer} />
          <AuthenticatedRoute path='/journals' component={JournalListContainer} />
          <AuthenticatedRoute path='/sign-out' component={SignOut} />
          <Route path='/token'>
            <TokenHandler />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <AuthenticatedRoute path='/' component={HomeContainer} />
        </Switch>
      </MoodsProvider>
    </BrowserRouter>
  )
}
