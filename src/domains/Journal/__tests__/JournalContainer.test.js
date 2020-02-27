import React from 'react'
import { act } from 'react-dom/test-utils'
import { shallow, mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'
import * as useApiModule from 'react-use-fetch-api'
import { PrimaryButton, Wrapper, PageHeader, Loading } from '_shared'
import { JournalContainer } from '../JournalContainer'
import { EntryListItem } from '../EntryListItem'

let subject
let mockJournal = {
  id: 1,
  name: 'Journal 1',
  template: 'Poetry',
  journalEntries: [
    {
      id: 1,
      title: 'Journal Entry 1'
    },
    {
      id: 2,
      title: 'Journal Entry 2'
    }
  ]
}

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: mockJournal.id
  }),
  useHistory: () => ({ push: jest.fn() })
}))

jest.spyOn(useApiModule, 'useApi').mockImplementation(() => ({
  get: () => Promise.resolve(mockJournal)
}))

describe('JournalContainer', () => {
  beforeEach(() => {})

  describe('render', () => {
    describe('when there is no journal entry', () => {
      fit('renders the Loading component', () => {
        subject = shallow(<JournalContainer />)
        expect(subject.find(Loading)).toHaveLength(1)
      })
    })

    describe('when there is a journal entry', () => {
      beforeEach(async () => {
        await act(async () => {
          subject = mount(
            <MemoryRouter>
              <JournalContainer />
            </MemoryRouter>
          )
        })
        subject.update()
      })

      it('renders a button to add a new entry', () => {
        expect(subject.find(Wrapper)).toHaveLength(1)
        expect(subject.find(PageHeader)).toHaveLength(1)
        const button = subject.find(PrimaryButton)
        expect(button).toHaveLength(1)
        const link = button.first().find(Link)
        expect(link.prop('to')['pathname']).toEqual(
          expect.stringMatching('/journals/1/entries/new')
        )
        expect(link.prop('to')['state']).toEqual(
          expect.objectContaining({
            template: 'Poetry'
          })
        )
      })

      it('renders a EntryListItem for each journal entry', () => {
        expect(subject.find(EntryListItem)).toHaveLength(mockJournal.journalEntries.length)
      })
    })
  })
})
