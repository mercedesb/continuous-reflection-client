import React from 'react'
import { shallow } from 'enzyme'
import { TextArea } from '../TextArea'
import { InputWrapper } from '../InputWrapper'
import { InputLabel } from '../InputLabel'

let subject
let name
let value
let label
let onChange = jest.fn()

describe('TextArea', () => {
  beforeEach(() => {
    name = 'name'
    value = 'value'
    label = 'label'

    subject = shallow(<TextArea name={name} value={value} label={label} handleChange={onChange} />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('textarea')).toHaveLength(1)
      expect(subject.find(InputLabel)).toHaveLength(1)
      expect(subject.find(InputWrapper)).toHaveLength(1)
      const textarea = subject.find('textarea').first()
      expect(textarea.prop('value')).toEqual(value)
      expect(textarea.prop('id')).toEqual(name)
      expect(textarea.prop('onChange')).toEqual(onChange)
    })
  })
})
