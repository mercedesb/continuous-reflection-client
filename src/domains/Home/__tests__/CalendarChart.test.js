import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import { ResponsiveCalendar } from '@nivo/calendar'
import { CalendarChart } from '../CalendarChart'
import { ButtonAsLink } from '_shared'

let subject
let data

describe('CalendarChart', () => {
  beforeEach(async () => {
    data = [
      {
        day: '2020-02-08',
        value: 1
      },
      {
        day: '2020-02-12',
        value: 2
      }
    ]

    await act(async () => {
      subject = mount(<CalendarChart data={data} />)
    })
    subject.update()
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(ResponsiveCalendar)).toHaveLength(1)
      expect(subject.find(ButtonAsLink)).toHaveLength(0)
    })

    it('passes expected props to ResponsiveCalendar', () => {
      const calendar = subject.find(ResponsiveCalendar).first()
      expect(calendar.prop('data')).toEqual(data)
      expect(calendar.prop('from')).toEqual('2020-01-02')
      expect(calendar.prop('to')).toEqual('2020-12-31')
    })

    describe('with more than 1 year', () => {
      beforeEach(async () => {
        data = [
          {
            day: '2020-02-08',
            value: 1
          },
          {
            day: '2019-02-12',
            value: 2
          }
        ]
        await act(async () => {
          subject = mount(<CalendarChart data={data} />)
        })
        subject.update()
      })

      it('renders a div with ButtonAsLink for each year', () => {
        expect(subject.find(ButtonAsLink)).toHaveLength(2)
      })
    })
  })
})
