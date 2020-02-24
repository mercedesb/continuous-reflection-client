import React from 'react'
import { shallow, mount } from 'enzyme'
import { AddNewJournal } from '../AddNewJournal'
import { TextInput, FormButtons } from '_shared'
import { apiClient } from 'utils'

let subject
let mockPush = jest.fn()
let mockFetchPromise = Promise.resolve({})
let postSpy = jest.spyOn(apiClient, 'post').mockImplementation(() => mockFetchPromise)

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({
    push: mockPush
  })
}))

describe('AddNewJournal', () => {
  beforeEach(() => {
    subject = shallow(<AddNewJournal />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('form')).toHaveLength(1)
      expect(subject.find(TextInput).length > 0).toEqual(true)
      expect(subject.find('input[type="radio"]').length > 0).toEqual(true)
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
        'journals',
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
