import React from 'react'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
import { Nav } from '../Nav'

let subject

describe('Nav', () => {
  beforeEach(() => {
    subject = shallow(<Nav />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('nav')).toHaveLength(1)
    })

    it('renders router links to other places in the app', () => {
      expect(subject.find(Link).length > 0).toEqual(true)
    })
  })
})
