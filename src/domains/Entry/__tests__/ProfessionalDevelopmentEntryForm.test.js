import React from 'react'
import { shallow, mount } from 'enzyme'
import { ProfessionalDevelopmentEntryForm } from '../ProfessionalDevelopmentEntryForm'
import { TextArea, TextInput, FormButtons } from '_shared'

let subject
let content
let handleSubmit = jest.fn()

describe('ProfessionalDevelopmentEntryForm', () => {
  beforeEach(() => {
    content = {}
    subject = shallow(
      <ProfessionalDevelopmentEntryForm content={content} handleSubmit={handleSubmit} />
    )
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(TextInput)).toHaveLength(1)
      expect(subject.find(TextArea)).toHaveLength(3)
      expect(subject.find(FormButtons)).toHaveLength(1)
    })
  })

  describe('form submission', () => {
    beforeEach(() => {
      content = {
        title: '',
        mood: '',
        todayILearned: '',
        goalProgress: '',
        celebrations: ''
      }

      subject = mount(
        <ProfessionalDevelopmentEntryForm content={content} handleSubmit={handleSubmit} />
      )
      const titleEvent = { target: { value: 'title' } }
      const todayILearnedEvent = { target: { value: 'learning!' } }
      const goalProgressEvent = { target: { value: 'like a boss' } }
      const celebrationsEvent = { target: { value: '🤗' } }

      subject
        .find('#title')
        .first()
        .simulate('change', titleEvent)
      subject
        .find('#todayILearned')
        .first()
        .simulate('change', todayILearnedEvent)
      subject
        .find('#goalProgress')
        .first()
        .simulate('change', goalProgressEvent)
      subject
        .find('#celebrations')
        .first()
        .simulate('change', celebrationsEvent)

      subject
        .find('form')
        .first()
        .simulate('submit', { preventDefault: jest.fn() })
    })

    it('calls handleSubmit with the expected arguments', () => {
      expect(handleSubmit).toHaveBeenCalledWith(
        expect.objectContaining({
          title: 'title',
          mood: '',
          todayILearned: 'learning!',
          goalProgress: 'like a boss',
          celebrations: '🤗'
        })
      )
    })
  })
})