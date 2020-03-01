import React from 'react'
import { shallow, mount } from 'enzyme'
import * as useApiModule from 'react-use-fetch-api'
import { EditPoetryEntry } from '../EditPoetryEntry'
import { PoetryEntryForm } from '../PoetryEntryForm'

let subject
let entry
let mockPush = jest.fn()
let mockId = 1

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({
    push: mockPush
  }),
  useParams: () => ({
    id: mockId
  })
}))

let putSpy = jest.fn(() => Promise.resolve({}))
jest.spyOn(useApiModule, 'useApi').mockImplementation(() => ({
  put: putSpy
}))

describe('EditPoetryEntry', () => {
  beforeEach(() => {
    entry = {
      content: {}
    }
    subject = shallow(<EditPoetryEntry entry={entry} />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(PoetryEntryForm)).toHaveLength(1)
    })
  })

  describe('form submission', () => {
    beforeEach(() => {
      entry = {
        content: {
          title: '',
          poem: '',
          entryDate: ''
        }
      }
      subject = mount(<EditPoetryEntry entry={entry} />)

      subject
        .find('form')
        .first()
        .simulate('submit', { preventDefault: jest.fn() })
    })

    it('calls apiClient.put with the expected arguments', () => {
      expect(putSpy).toHaveBeenCalledWith(
        expect.stringContaining('poetry_contents'),
        expect.objectContaining({
          poetryContent: expect.objectContaining({
            title: expect.any(String),
            poem: expect.any(String),
            journalEntryAttributes: expect.objectContaining({
              journalId: mockId,
              entryDate: expect.any(Date)
            })
          })
        })
      )
    })

    it('redirects the user to the new journal', () => {
      expect(mockPush).toHaveBeenCalledWith(
        expect.stringMatching(new RegExp(`journals/${mockId}/entries/`, 'i'))
      )
    })
  })
})
