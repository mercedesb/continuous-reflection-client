import React from 'react'
import { shallow } from 'enzyme'
import { JournalContainer } from '../JournalContainer'
import { EntryListItem } from '../EntryListItem'
import { PrimaryButton } from '_shared'
import { Link } from 'react-router-dom'

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
  })
}))

jest.mock('hooks', () => ({
  ...jest.requireActual('hooks'),
  useApi: () => mockJournal
}))

describe('JournalContainer', () => {
  beforeEach(() => {
    subject = shallow(<JournalContainer />)
  })

  describe('render', () => {
    it('renders a button to add a new entry', () => {
      const button = subject.find(PrimaryButton)
      expect(button).toHaveLength(1)
      const link = button.find(Link)
      expect(link.prop('to')['pathname']).toEqual(expect.stringMatching('/journals/1/entries/new'))
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
