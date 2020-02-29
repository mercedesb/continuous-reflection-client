import React from 'react'
import { shallow, mount } from 'enzyme'
import { PoetryEntryForm } from '../PoetryEntryForm'
import { TextArea, TextInput, FormButtons, DatePicker } from '_shared'

let subject
let content
let mockDate = new Date()
let mockToDate = () => mockDate
let handleSubmit = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({
    push: jest.fn()
  })
}))

jest.mock('moment', () => () => ({ toDate: mockToDate }))
jest.mock('react-day-picker/moment', () => ({
  ...jest.requireActual('react-day-picker/moment'),
  formatDate: () => 'Saturday, March 7, 2020',
  parseDate: () => mockToDate
}))

describe('PoetryEntryForm', () => {
  beforeEach(() => {
    content = {}
    subject = shallow(<PoetryEntryForm content={content} handleSubmit={handleSubmit} />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(TextInput)).toHaveLength(1)
      expect(subject.find(DatePicker)).toHaveLength(1)
      expect(subject.find(TextArea)).toHaveLength(1)
      expect(subject.find(FormButtons)).toHaveLength(1)
    })

    it('defaults the date in state to today', () => {
      const datePicker = subject.find(DatePicker).first()
      expect(datePicker.prop('value')).toEqual(mockDate)
    })
  })

  describe('form submission', () => {
    beforeEach(() => {
      content = { title: '', poem: '' }

      subject = mount(<PoetryEntryForm content={content} handleSubmit={handleSubmit} />)
      const titleEvent = { target: { value: 'title' } }
      const poemEvent = { target: { value: 'poetry' } }
      subject
        .find('#title')
        .first()
        .simulate('change', titleEvent)
      subject
        .find('#poem')
        .first()
        .simulate('change', poemEvent)

      subject
        .find('form')
        .first()
        .simulate('submit', { preventDefault: jest.fn() })
    })

    it('calls handleSubmit with the expected arguments', () => {
      expect(handleSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'title',
          poem: 'poetry',
          journalEntryAttributes: {
            entryDate: expect.any(Date)
          }
        })
      )
    })
  })
})
