import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import * as useApiModule from 'react-use-fetch-api'
import { CalendarChart } from '../CalendarChart'
import { JournalCalendar } from '../JournalCalendar'

let subject

let mockEntries = [
  {
    content: {
      entryDate: '2020-02-08T22:41:28+0000',
      mood: 'test'
    }
  },
  {
    content: {
      entryDate: '2020-02-12T22:41:28+0000',
      mood: 'fake'
    }
  },
  {
    content: {
      entryDate: '2020-02-12T22:41:28+0000'
    }
  }
]

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({ push: jest.fn() })
}))

jest.spyOn(useApiModule, 'useApi').mockImplementation(() => ({
  get: () => Promise.resolve(mockEntries)
}))

describe('JournalCalendar', () => {
  beforeEach(async () => {
    await act(async () => {
      subject = mount(<JournalCalendar journals={[]} />)
    })
    subject.update()
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(CalendarChart)).toHaveLength(1)
    })

    it('passes expected props to CalendarChart', () => {
      const calendarChart = subject.find(CalendarChart).first()
      expect(calendarChart.prop('data')).toEqual([
        {
          day: '2020-02-08',
          value: 1
        },
        {
          day: '2020-02-12',
          value: 2
        }
      ])
    })
  })
})
