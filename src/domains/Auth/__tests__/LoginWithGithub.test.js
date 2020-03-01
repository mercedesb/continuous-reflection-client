import React from 'react'
import { shallow } from 'enzyme'
import { LoginWithGithub } from '../LoginWithGithub'
import { LinkAsButton } from '_shared'

let subject

describe('LoginWithGithub', () => {
  beforeEach(() => {
    subject = shallow(<LoginWithGithub />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      const link = subject.find(LinkAsButton)
      expect(link).toHaveLength(1)
      expect(link.prop('href')).toEqual(expect.stringContaining('github.com/login/oauth/authorize'))
    })
  })
})
