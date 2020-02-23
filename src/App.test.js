import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

let subject

describe('App', () => {
  beforeEach(() => {
    subject = shallow(<App />)
  })

  describe('render', () => {
    it('renders the router', () => {
      expect(subject.find(BrowserRouter).length).toEqual(1)
    })
  })
})
