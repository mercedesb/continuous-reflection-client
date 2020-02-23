import React from 'react'
import { shallow } from 'enzyme'
import { JournalContainer } from '../JournalContainer'
import { EntryListItem } from '../EntryListItem'
import { Button } from '_shared'
import { Link } from 'react-router-dom'

let subject

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useParams: () => ({
    id: 1
  })
}))

jest.mock('hooks', () => ({
  ...jest.requireActual('hooks'),
  useApi: () => ({
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
  })
}))

describe('JournalContainer', () => {
  beforeEach(() => {
    subject = shallow(<JournalContainer />)
  })

  describe('render', () => {
    it('renders a button to add a new entry', () => {
      const button = subject.find(Button)
      expect(button).toHaveLength(1)
      const link = button.find(Link)
      expect(link.prop('to')['pathname']).toEqual(expect.stringMatching('/journals/1/entries/new'))
      expect(link.prop('to')['state']).toEqual(
        expect.objectContaining({
          template: 'Poetry'
        })
      )
    })

    it('renders a EntryListItem for each journal', () => {
      expect(subject.find(EntryListItem)).toHaveLength(2)
    })
  })
})
