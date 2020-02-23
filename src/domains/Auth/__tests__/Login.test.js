import React from 'react'
import { shallow } from 'enzyme'
import { Login } from '../Login'
import { LoginWithGithub } from '../LoginWithGithub'

let subject

describe('Login', () => {
  beforeEach(() => {
    subject = shallow(<Login />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(LoginWithGithub)).toHaveLength(1)
    })
  })
})
