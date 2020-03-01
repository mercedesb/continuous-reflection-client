import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router-dom'
import * as useApiModule from 'react-use-fetch-api'
import { TextInput } from '_shared'
import { EditJournal } from '../EditJournal'

let subject
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

let getSpy = jest.fn(() => Promise.resolve({ name: 'journal name' }))
let putSpy = jest.fn(() => Promise.resolve({ id: mockId }))

jest.spyOn(useApiModule, 'useApi').mockImplementation(() => ({
  get: getSpy,
  put: putSpy
}))

describe('EditJournal', () => {
  beforeEach(async () => {
    await act(async () => {
      subject = mount(
        <MemoryRouter>
          <EditJournal />
        </MemoryRouter>
      )
    })
    subject.update()
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('form')).toHaveLength(1)
      expect(subject.find(TextInput)).toHaveLength(1)
      expect(
        subject
          .find('#journalName')
          .first()
          .prop('value')
      ).toEqual('journal name')
    })
  })

  describe('form submision', () => {
    beforeEach(async () => {
      await act(async () => {
        subject = mount(
          <MemoryRouter>
            <EditJournal />
          </MemoryRouter>
        )
      })
      subject.update()

      subject
        .find('form')
        .first()
        .simulate('submit', { preventDefault: jest.fn() })
    })

    it('calls apiClient.put with the expected arguments', () => {
      expect(putSpy).toHaveBeenCalledWith(
        expect.stringContaining('journal'),
        expect.objectContaining({
          journal: expect.objectContaining({
            name: 'journal name'
          })
        })
      )
    })

    it('redirects the user to the journal', () => {
      expect(mockPush).toHaveBeenCalledWith(
        expect.stringMatching(new RegExp(`journals/${mockId}`, 'i'))
      )
    })
  })
})
