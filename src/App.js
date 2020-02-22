import React, { Component } from 'react'
import { getQueryParams } from './utils'
import { Login } from './Auth'
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
    return this.isLoggedIn() ? <Main token={this.state.token} /> : <Login />
  }
}
