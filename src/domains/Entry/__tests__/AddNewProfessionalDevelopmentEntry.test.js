import React from 'react'
import { shallow, mount } from 'enzyme'
import { AddNewProfessionalDevelopmentEntry } from '../AddNewProfessionalDevelopmentEntry'
import { ProfessionalDevelopmentEntryForm } from '../ProfessionalDevelopmentEntryForm'
import { apiClient } from 'utils'

let subject
let mockPush = jest.fn()
let mockId = 1
let mockFetchPromise = Promise.resolve({})
let postSpy = jest.spyOn(apiClient, 'post').mockImplementation(() => mockFetchPromise)

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({
    push: mockPush
  }),
  useParams: () => ({
    id: mockId
  })
}))

describe('AddNewProfessionalDevelopmentEntry', () => {
  beforeEach(() => {
    subject = shallow(<AddNewProfessionalDevelopmentEntry />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(ProfessionalDevelopmentEntryForm)).toHaveLength(1)
    })
  })

  describe('form submission', () => {
    beforeEach(() => {
      subject = mount(<AddNewProfessionalDevelopmentEntry />)
      subject
        .find('form')
        .first()
        .simulate('submit', { preventDefault: jest.fn() })
    })

    it('calls apiClient.post with the expected arguments', () => {
      expect(postSpy).toHaveBeenCalledWith(
        'professional_development_contents',
        expect.objectContaining({
          professionalDevelopmentContent: expect.objectContaining({
            journalEntryAttributes: expect.objectContaining({
              journalId: mockId
            })
          })
        }),
        expect.any(Function)
      )
    })
  })

  it('redirects the user to the new journal', () => {
    expect(mockPush).toHaveBeenCalledWith(
      expect.stringMatching(new RegExp(`journals/${mockId}/entries/`, 'i'))
    )
  })
})
