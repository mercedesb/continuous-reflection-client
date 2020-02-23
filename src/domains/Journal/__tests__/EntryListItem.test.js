import React from 'react'
import { shallow } from 'enzyme'
import { EntryListItem } from '../EntryListItem'
import { Link } from 'react-router-dom'

let subject
let entry

describe('EntryListItem', () => {
  beforeEach(() => {
    entry = {
      id: 1,
      title: 'Journal 1'
    }
    subject = shallow(<EntryListItem journalId={1} entry={entry} />)
  })

  describe('render', () => {
    it('renders a link to the entry', () => {
      const link = subject.find(Link)
      expect(link.prop('to')).toEqual(expect.stringMatching(`/journals/1/entries/${entry.id}`))
    })
  })
})
