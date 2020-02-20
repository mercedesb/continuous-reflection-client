import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { Login } from './Auth'
import { Main } from './Main'

let subject

describe('App', () => {
  beforeEach(() => {
    subject = shallow(<App />)
  })
  describe('without a token param', () => {
    it('renders a Login view', () => {
      expect(subject.find(Login)).toHaveLength(1)
    })

    it('does not render a Main view', () => {
      expect(subject.find(Main)).toHaveLength(0)
    })
  })

  describe('with a token param', () => {
    beforeEach(() => {
      subject.setState({ token: 'foobar' })
    })

    it('does not render a Login view', () => {
      expect(subject.find(Login)).toHaveLength(0)
    })

    it('renders a Main view', () => {
      expect(subject.find(Main)).toHaveLength(1)
    })
  })
})
