import React, { useState, useEffect } from 'react'
import { ResponsiveCalendar } from '@nivo/calendar'
import { ButtonAsLink } from '_shared'

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export function CalendarChart({ data }) {
  const [years, setYears] = useState([])
  const [currentYear, setCurrentYear] = useState('')

  useEffect(() => {
    const uniqYears = new Set(data.map(d => parseInt(d.day.substring(0, 4))))
    const sortedYears = [...uniqYears].sort()
    setYears(sortedYears)
    setCurrentYear(sortedYears[0])
  }, [data])

  // There's a bug and needs to start on second day???
  return (
    <div className='relative h-full'>
      <ResponsiveCalendar
        data={data}
        from={`${currentYear}-01-02`}
        to={`${currentYear}-12-31`}
        emptyColor='#eeeeee'
        colors={['#87788B']}
        margin={{ top: 8, right: 24, bottom: 0, left: 24 }}
        monthBorderColor='#ffffff'
        dayBorderWidth={2}
        dayBorderColor='#ffffff'
        yearLegend={year => ''}
        legends={[]}
      />
      <div className='absolute inset-x-0 top-0 flex justify-center text-center'>
        {years.length > 1 &&
          years.map(y => (
            <ButtonAsLink
              key={y}
              className={`no-underline ${y === currentYear ? 'font-extrabold' : ''}`}
              handleClick={() => setCurrentYear(y)}
            >
              {y}
            </ButtonAsLink>
          ))}
      </div>
    </div>
  )
}
