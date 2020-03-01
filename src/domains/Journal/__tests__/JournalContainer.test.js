import React from 'react'
import { act } from 'react-dom/test-utils'
import { shallow, mount } from 'enzyme'
import { Link, MemoryRouter } from 'react-router-dom'
import * as useApiModule from 'react-use-fetch-api'
import {
  PrimaryButton,
  SecondaryButton,
  Wrapper,
  PageHeader,
  Loading,
  ButtonAsLink,
  Modal
} from '_shared'
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
let mockPush = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({
    push: mockPush
  }),
  useParams: () => ({
    id: mockJournal.id
  })
}))

let delSpy = jest.fn(() => Promise.resolve({}))
jest.spyOn(useApiModule, 'useApi').mockImplementation(() => ({
  get: () => Promise.resolve(mockJournal),
  del: delSpy
}))

describe('JournalContainer', () => {
  describe('render', () => {
    describe('when there is no journal entry', () => {
      it('renders the Loading component', () => {
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
        const link = subject.find(Link).at(1)
        expect(link.prop('to')['pathname']).toEqual(
          expect.stringMatching('/journals/1/entries/new')
        )
        expect(link.prop('to')['state']).toEqual(
          expect.objectContaining({
            template: 'Poetry'
          })
        )
      })

      it('renders a link to edit the journal', () => {
        const link = subject.find(Link).first()
        expect(link.prop('to')).toEqual(expect.stringMatching('/journals/1/edit'))
      })

      it('renders a button to delete the journal', () => {
        expect(subject.find(ButtonAsLink)).toHaveLength(1)
      })

      it('renders a EntryListItem for each journal entry', () => {
        expect(subject.find(EntryListItem)).toHaveLength(mockJournal.journalEntries.length)
      })

      describe('clicking the delete button', () => {
        it('renders a Modal', () => {
          subject.find(ButtonAsLink).simulate('click')
          expect(subject.find(Modal)).toHaveLength(1)
        })
      })
    })
  })

  describe('delete journal modal interactions', () => {
    beforeEach(async () => {
      await act(async () => {
        subject = mount(
          <MemoryRouter>
            <JournalContainer />
          </MemoryRouter>
        )
      })
      subject.update()
      subject.find(ButtonAsLink).simulate('click')
    })

    describe('clicking cancel in the modal', () => {
      it('hides (does not render) the modal', () => {
        const modal = subject.find(Modal).first()
        const cancelButton = modal.find(SecondaryButton).first()
        cancelButton.simulate('click', { preventDefault: jest.fn() })
        expect(subject.find(Modal)).toHaveLength(0)
      })
    })

    describe('clicking confirm in the modal', () => {
      beforeEach(() => {
        const modal = subject.find(Modal).first()
        const confirmButton = modal.find(PrimaryButton).first()
        confirmButton.simulate('click', { preventDefault: jest.fn() })
      })

      it('calls apiClient.del with the expected arguments', () => {
        expect(delSpy).toHaveBeenCalledWith(expect.stringContaining(`journals/${mockJournal.id}`))
      })

      it('redirects the user to list of journals', () => {
        expect(mockPush).toHaveBeenCalledWith(expect.stringMatching('journals'))
      })
    })
  })
})
