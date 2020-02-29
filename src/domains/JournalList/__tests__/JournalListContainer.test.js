import React from 'react'
import { act } from 'react-dom/test-utils'
import { shallow, mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'
import * as useApiModule from 'react-use-fetch-api'
import { PrimaryButton, Loading } from '_shared'
import { JournalListContainer } from '../JournalListContainer'
import { JournalListItem } from '../JournalListItem'

let subject
let mockJournals = [
  {
    id: 1,
    name: 'Journal 1'
  },
  {
    id: 2,
    name: 'Journal 2'
  }
]

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({ push: jest.fn() })
}))

jest.spyOn(useApiModule, 'useApi').mockImplementation(() => ({
  get: () => Promise.resolve(mockJournals)
}))

describe('JournalListContainer', () => {
  describe('render', () => {
    it('renders a button to add a new journal', () => {
      subject = shallow(<JournalListContainer />)
      const button = subject.find(PrimaryButton)
      expect(button).toHaveLength(1)
      const link = subject.find(Link).first()
      expect(link.prop('to')).toEqual(expect.stringMatching('/journals/new'))
    })

    describe('when there are no journals', () => {
      beforeEach(() => {
        subject = shallow(<JournalListContainer />)
      })

      it('renders the Loading component', () => {
        expect(subject.find(Loading)).toHaveLength(1)
      })
    })

    describe('when there are journals', () => {
      beforeEach(async () => {
        await act(async () => {
          subject = mount(
            <MemoryRouter>
              <JournalListContainer />
            </MemoryRouter>
          )
        })
        subject.update()
      })

      it('renders a JournalListItem for each journal', () => {
        expect(subject.find(JournalListItem)).toHaveLength(2)
      })
    })
  })
})
