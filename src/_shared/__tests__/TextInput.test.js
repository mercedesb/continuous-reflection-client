import React from 'react'
import { shallow } from 'enzyme'
import { TextInput } from '../TextInput'
import { InputWrapper } from '../InputWrapper'
import { InputLabel } from '../InputLabel'

let subject
let name
let value
let label
let onChange = jest.fn()

describe('TextInput', () => {
  beforeEach(() => {
    name = 'name'
    value = 'value'
    label = 'label'

    subject = shallow(<TextInput name={name} value={value} label={label} handleChange={onChange} />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('input[type="text"]')).toHaveLength(1)
      expect(subject.find(InputLabel)).toHaveLength(1)
      expect(subject.find(InputWrapper)).toHaveLength(1)
      const input = subject.find('input[type="text"]').first()
      expect(input.prop('value')).toEqual(value)
      expect(input.prop('id')).toEqual(name)
      expect(input.prop('onChange')).toEqual(onChange)
    })
  })
})
