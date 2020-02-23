import React from 'react'
import { shallow } from 'enzyme'
import { Redirect } from 'react-router-dom'
import { TokenHandler } from '../TokenHandler'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useLocation: () => ({
    search: '?token=randomtokenhere'
  })
}))

let subject

describe('TokenHandler', () => {
  beforeEach(() => {
    subject = shallow(<TokenHandler />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(Redirect)).toHaveLength(1)
    })

    it('sets the token in localStorage', () => {
      expect(localStorage.getItem('token')).toEqual('randomtokenhere')
    })
  })
})
