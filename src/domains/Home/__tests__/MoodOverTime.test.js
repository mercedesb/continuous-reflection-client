import React from 'react'
import { act } from 'react-dom/test-utils'
import { mount } from 'enzyme'
import * as useApiModule from 'react-use-fetch-api'
import { LineChart } from '../LineChart'
import { MoodOverTime } from '../MoodOverTime'

let subject
let mockMoods = [
  { label: 'mood test', value: 'test', ranking: 1 },
  { label: 'mood fake', value: 'fake', ranking: 2 },
  { label: 'mood made up', value: 'made up', ranking: 3 }
]
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
      entryDate: '2020-02-17T22:41:28+0000'
    }
  }
]

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({ push: jest.fn() })
}))

jest.spyOn(React, 'useContext').mockImplementation(() => ({
  moods: mockMoods
}))

jest.spyOn(useApiModule, 'useApi').mockImplementation(() => ({
  get: () => Promise.resolve(mockEntries)
}))

describe('MoodOverTime', () => {
  beforeEach(async () => {
    await act(async () => {
      subject = mount(<MoodOverTime journals={[]} />)
    })
    subject.update()
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(LineChart)).toHaveLength(1)
    })

    it('filters out entries without a mood property', () => {})

    it('passes expected props to LineChart', () => {
      const lineChart = subject.find(LineChart).first()
      expect(lineChart.prop('getColor')).toEqual(expect.any(Function))
      expect(lineChart.prop('formatXAxisLabels')).toEqual(expect.any(Function))
      expect(lineChart.prop('formatYAxisLabels')).toEqual(expect.any(Function))
      expect(lineChart.prop('data')).toEqual([
        {
          id: 'mood',
          data: [
            {
              x: '2020-02-08',
              y: 1
            },
            {
              x: '2020-02-12',
              y: 2
            }
          ]
        }
      ])
    })
  })
})
