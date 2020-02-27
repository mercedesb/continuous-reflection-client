import React from 'react'
import { shallow, mount } from 'enzyme'
import * as useApiModule from 'react-use-fetch-api'
import { AddNewProfessionalDevelopmentEntry } from '../AddNewProfessionalDevelopmentEntry'
import { ProfessionalDevelopmentEntryForm } from '../ProfessionalDevelopmentEntryForm'

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

let postSpy = jest.fn(() => Promise.resolve({}))
jest.spyOn(useApiModule, 'useApi').mockImplementation(() => ({
  post: postSpy
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
        expect.stringContaining('professional_development_contents'),
        expect.objectContaining({
          professionalDevelopmentContent: expect.objectContaining({
            journalEntryAttributes: expect.objectContaining({
              journalId: mockId
            })
          })
        })
      )
    })
  })

  it('redirects the user to the new journal', () => {
    expect(mockPush).toHaveBeenCalledWith(
      expect.stringMatching(new RegExp(`journals/${mockId}/entries/`, 'i'))
    )
  })
})
