import React from 'react'
import { shallow } from 'enzyme'
import { InputLabel } from '../InputLabel'

let subject
let label
let name

describe('InputLabel', () => {
  beforeEach(() => {
    name = 'name'
    label = 'Label'
    subject = shallow(<InputLabel name={name} label={label} />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('label')).toHaveLength(1)
      expect(subject.find('label').text()).toEqual(expect.stringContaining(label))
    })

    it('sets the htmlFor prop on label', () => {
      expect(
        subject
          .find('label')
          .first()
          .prop('htmlFor')
      ).toEqual(name)
    })
  })
})
