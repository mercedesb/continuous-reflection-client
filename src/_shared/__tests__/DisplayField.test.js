import React from 'react'
import { shallow } from 'enzyme'
import { DisplayWrapper } from '../DisplayWrapper'
import { DisplayLabel } from '../DisplayLabel'
import { DisplayField } from '../DisplayField'

let subject

describe('DisplayField', () => {
  beforeEach(() => {
    subject = shallow(<DisplayField />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(DisplayWrapper)).toHaveLength(1)
      expect(subject.find(DisplayLabel)).toHaveLength(1)
    })
  })
})
