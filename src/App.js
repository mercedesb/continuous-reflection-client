import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { TokenContext } from 'contexts'
import { AuthenticatedRoute, Login, TokenHandler } from 'domains'
import { Main } from './Main'

export default function App() {
  const [token, setToken] = useState(null)

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      <BrowserRouter>
        <Switch>
          <AuthenticatedRoute path='/journals/:id'>
            {/* <Journal /> */}
            <div>Rendering journal</div>
          </AuthenticatedRoute>
          <AuthenticatedRoute path='/journals'>
            {/* <JournalList /> */}
            <div>rendering list of journals</div>
          </AuthenticatedRoute>
          <AuthenticatedRoute path='/home'>
            <Main />
          </AuthenticatedRoute>
          <Route path='/token'>
            <TokenHandler />
          </Route>
          <Route path='/'>
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </TokenContext.Provider>
  )
}
