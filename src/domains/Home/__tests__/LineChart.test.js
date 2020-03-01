import React from 'react'
import { shallow } from 'enzyme'
import { ResponsiveLine } from '@nivo/line'
import { LineChart } from '../LineChart'

let subject
let data
let getColor = jest.fn()
let formatXAxisLabels = jest.fn()
let formatYAxisLabels = jest.fn()

describe('LineChart', () => {
  beforeEach(() => {
    data = {}
    subject = shallow(
      <LineChart
        data={data}
        getColor={getColor}
        formatXAxisLabels={formatXAxisLabels}
        formatYAxisLabels={formatYAxisLabels}
      />
    )
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(ResponsiveLine)).toHaveLength(1)
    })

    it('passes expected props to ResponsiveLine', () => {
      const nivoLine = subject.find(ResponsiveLine).first()
      expect(nivoLine.prop('yFormat')).toEqual(formatYAxisLabels)
      expect(nivoLine.prop('axisLeft')).toEqual(
        expect.objectContaining({ format: formatYAxisLabels })
      )
      expect(nivoLine.prop('axisBottom')).toEqual(
        expect.objectContaining({ format: formatXAxisLabels })
      )
      expect(nivoLine.prop('pointSymbol')).toEqual(expect.any(Function))
    })
  })
})
