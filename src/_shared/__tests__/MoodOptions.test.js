import React from 'react'
import { shallow } from 'enzyme'
import { MoodOptions } from '../MoodOptions'

let subject

xdescribe('MoodOptions', () => {
  beforeEach(() => {
    subject = shallow(<MoodOptions />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find()).toHaveLength(1)
    })
  })
})
