import React, { Component } from "react";
import { getQueryParams } from "./utils";
import { Login } from "./Auth";
import { Main } from "./Main";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    const params = getQueryParams();
    this.state = { token: params.token };
  }

  isLoggedIn() {
    return !!this.state.token;
  }

  render() {
    return (
      <div className="App">
        {this.isLoggedIn() ? <Main token={this.state.token} /> : <Login />}
      </div>
    );
  }
}
