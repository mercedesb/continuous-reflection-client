import React from 'react'
import { shallow } from 'enzyme'
import { RadioToggle } from '../RadioToggle'

let subject
let name
let label
let value
let checked
let handleChange = jest.fn()
let title

describe('RadioToggle', () => {
  beforeEach(() => {
    name = 'name'
    label = 'label'
    value = 'value'
    checked = false
    title = 'group'
    subject = shallow(
      <RadioToggle
        name={name}
        label={label}
        value={value}
        title={title}
        handleChange={handleChange}
        checked={checked}
      />
    )
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('label')).toHaveLength(1)
      expect(subject.find('input[type="radio"]')).toHaveLength(1)
    })

    describe('when not checked', () => {
      it('does not render the input checked', () => {
        const radio = subject.find('input[type="radio"]').first()
        expect(radio.prop('checked')).toEqual(false)
      })
    })

    describe('when checked', () => {
      beforeEach(() => {
        subject = shallow(
          <RadioToggle
            name={name}
            label={label}
            value={value}
            title={title}
            handleChange={handleChange}
            checked={true}
          />
        )
      })

      it('does renders the input checked', () => {
        const radio = subject.find('input[type="radio"]').first()
        expect(radio.prop('checked')).toEqual(true)
      })
    })
  })

  describe('clicking the input', () => {
    it('calls the handleChange function that was passed in', () => {
      subject
        .find('input[type="radio"]')
        .first()
        .simulate('change')
      expect(handleChange).toHaveBeenCalled()
    })
  })
})
