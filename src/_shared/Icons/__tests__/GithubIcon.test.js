import React from 'react'
import { shallow } from 'enzyme'
import { GithubIcon } from '../GithubIcon'

let subject

describe('GithubIcon', () => {
  beforeEach(() => {
    subject = shallow(<GithubIcon />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('svg')).toHaveLength(1)
    })

    describe('with class names', () => {
      beforeEach(() => {
        subject = shallow(<GithubIcon className='bg-green' />)
      })

      it('renders an svg with those class names', () => {
        expect(subject.find('svg.bg-green')).toHaveLength(1)
      })
    })
  })
})
