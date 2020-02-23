import React from 'react'
import { shallow } from 'enzyme'
import { Loading } from '../Loading'

let subject

describe('Loading', () => {
  beforeEach(() => {
    subject = shallow(<Loading />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('.loading')).toHaveLength(1)
    })
  })
})
