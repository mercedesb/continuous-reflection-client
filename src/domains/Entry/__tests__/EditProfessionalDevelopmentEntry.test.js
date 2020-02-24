import React from 'react'
import { shallow, mount } from 'enzyme'
import { EditProfessionalDevelopmentEntry } from '../EditProfessionalDevelopmentEntry'
import { ProfessionalDevelopmentEntryForm } from '../ProfessionalDevelopmentEntryForm'
import { apiClient } from 'utils'

let subject
let entry
let mockPush = jest.fn()
let mockId = 1
let mockFetchPromise = Promise.resolve({})
let putSpy = jest.spyOn(apiClient, 'put').mockImplementation(() => mockFetchPromise)

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({
    push: mockPush
  }),
  useParams: () => ({
    id: mockId
  })
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
          celebrations: ''
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
