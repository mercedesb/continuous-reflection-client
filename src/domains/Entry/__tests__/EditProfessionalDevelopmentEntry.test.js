import React from 'react'
import { shallow, mount } from 'enzyme'
import * as useApiModule from 'react-use-fetch-api'
import { EditProfessionalDevelopmentEntry } from '../EditProfessionalDevelopmentEntry'
import { ProfessionalDevelopmentEntryForm } from '../ProfessionalDevelopmentEntryForm'

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

describe('EditProfessionalDevelopmentEntry', () => {
  beforeEach(() => {
    entry = {
      content: {}
    }
    subject = shallow(<EditProfessionalDevelopmentEntry entry={entry} />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(ProfessionalDevelopmentEntryForm)).toHaveLength(1)
    })
  })

  describe('form submission', () => {
    beforeEach(() => {
      entry = {
        content: {
          title: '',
          mood: '',
          todayILearned: '',
          goalProgress: '',
          celebrations: '',
          entryDate: ''
        }
      }
      subject = mount(<EditProfessionalDevelopmentEntry entry={entry} />)

      subject
        .find('form')
        .first()
        .simulate('submit', { preventDefault: jest.fn() })
    })

    it('calls apiClient.post with the expected arguments', () => {
      expect(putSpy).toHaveBeenCalledWith(
        expect.stringContaining('professional_development_contents'),
        expect.objectContaining({
          professionalDevelopmentContent: expect.objectContaining({
            title: expect.any(String),
            mood: expect.any(String),
            todayILearned: expect.any(String),
            goalProgress: expect.any(String),
            celebrations: expect.any(String),
            journalEntryAttributes: expect.objectContaining({
              journalId: mockId,
              entryDate: expect.any(Date)
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
