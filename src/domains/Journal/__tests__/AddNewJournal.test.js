import React from 'react'
import { shallow, mount } from 'enzyme'
import * as useApiModule from 'react-use-fetch-api'
import { TextInput, FormButtons, RadioToggle } from '_shared'
import { AddNewJournal } from '../AddNewJournal'

let subject
let mockPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({
    push: mockPush
  })
}))

let postSpy = jest.fn(() => Promise.resolve({}))
jest.spyOn(useApiModule, 'useApi').mockImplementation(() => ({
  post: postSpy
}))

describe('AddNewJournal', () => {
  beforeEach(() => {
    subject = shallow(<AddNewJournal />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('form')).toHaveLength(1)
      expect(subject.find(TextInput).length > 0).toEqual(true)
      expect(subject.find(RadioToggle).length > 0).toEqual(true)
      expect(subject.find(FormButtons)).toHaveLength(1)
    })
  })

  describe('form submission', () => {
    beforeEach(() => {
      subject = mount(<AddNewJournal />)
      const nameEvent = { target: { value: 'name' } }
      const templateEvent = { target: { value: 'poetry' } }
      subject
        .find('#journalName')
        .first()
        .simulate('change', nameEvent)
      subject
        .find('#poetry')
        .first()
        .simulate('change', templateEvent)

      subject
        .find('form')
        .first()
        .simulate('submit', { preventDefault: jest.fn() })
    })

    it('calls apiClient.post with the expected arguments', () => {
      expect(postSpy).toHaveBeenCalledWith(
        expect.stringContaining('journals'),
        expect.objectContaining({
          journal: expect.objectContaining({
            name: 'name',
            template: 'poetry'
          })
        })
      )
    })
  })

  it('redirects the user to the new journal', () => {
    expect(mockPush).toHaveBeenCalledWith(expect.stringMatching(/journals\/.+/i))
  })
})
