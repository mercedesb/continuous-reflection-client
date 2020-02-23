import React from 'react'
import { shallow } from 'enzyme'
import { JournalListItem } from '../JournalListItem'
import { Link } from 'react-router-dom'

let subject
let journal

describe('JournalListItem', () => {
  beforeEach(() => {
    journal = {
      id: 1,
      name: 'Journal 1'
    }
    subject = shallow(<JournalListItem journal={journal} />)
  })

  describe('render', () => {
    it('renders a link to the journal', () => {
      const link = subject.find(Link)
      expect(link.prop('to')).toEqual(expect.stringMatching(`/journals/${journal.id}`))
    })
  })
})
