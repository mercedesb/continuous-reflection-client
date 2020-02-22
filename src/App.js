import React, { Component } from 'react'
import { getQueryParams } from 'utils'
import { TokenContext } from 'contexts'
import { Login } from 'domains'
import { Main } from './Main'

export default class App extends Component {
  constructor() {
    super()

    const params = getQueryParams()
    this.state = { token: params.token }
  }

  isLoggedIn() {
    return !!this.state.token
  }

  render() {
    return (
      <TokenContext.Provider value={this.state.token}>
        {this.isLoggedIn() ? <Main /> : <Login />}
      </TokenContext.Provider>
    )
  }
}
