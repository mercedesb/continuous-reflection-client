import React from 'react'
import { shallow } from 'enzyme'
import { Redirect } from 'react-router-dom'
import { SignOut } from '../SignOut'

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useLocation: () => ({})
}))

let subject

describe('SignOut', () => {
  beforeEach(() => {
    subject = shallow(<SignOut />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(Redirect)).toHaveLength(1)
    })

    it('removes the token from localStorage', () => {
      expect(localStorage.getItem('token')).toEqual(null)
    })
  })
})
