import React from 'react'
import { mount } from 'enzyme'
import { RadioToggle } from '_shared'
import { MoodsOptions } from '../MoodsOptions'
import { act } from 'react-dom/test-utils'

let subject
let mockMoods = [
  { label: 'mood 1', value: 1 },
  { label: 'mood 2', value: 2 },
  { label: 'mood 3', value: 3 }
]
let handleChange = jest.fn()

jest.spyOn(React, 'useContext').mockImplementation(() => ({
  moods: mockMoods
}))

describe('MoodsOptions', () => {
  beforeEach(() => {
    subject = mount(<MoodsOptions handleChange={handleChange} />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(RadioToggle)).toHaveLength(mockMoods.length)
    })
  })
})
