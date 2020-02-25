import React from 'react'
import { shallow } from 'enzyme'
import { JournalListContainer } from '../JournalListContainer'
import { JournalListItem } from '../JournalListItem'
import { PrimaryButton } from '_shared'
import { Link } from 'react-router-dom'

jest.mock('hooks', () => ({
  ...jest.requireActual('hooks'),
  useApiGet: () => [
    {
      id: 1,
      name: 'Journal 1'
    },
    {
      id: 2,
      name: 'Journal 2'
    }
  ]
}))

let subject

describe('JournalListContainer', () => {
  beforeEach(() => {
    subject = shallow(<JournalListContainer />)
  })

  describe('render', () => {
    it('renders a button to add a new journal', () => {
      const button = subject.find(PrimaryButton)
      expect(button).toHaveLength(1)
      const link = button.find(Link)
      expect(link.prop('to')).toEqual(expect.stringMatching('/journals/new'))
    })

    it('renders a JournalListItem for each journal', () => {
      expect(subject.find(JournalListItem)).toHaveLength(2)
    })
  })
})
