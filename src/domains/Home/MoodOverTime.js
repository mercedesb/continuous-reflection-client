import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { useApi } from 'react-use-fetch-api'
import { MoodsContext } from 'contexts'
import { SHORT_DATE_FORMAT } from 'utils'
import { useApiUrl, useUnauthorizedHandler, useErrorHandler } from 'hooks'
import { LineChart } from './LineChart'

export function MoodOverTime({ journals }) {
  const { moods } = React.useContext(MoodsContext)
  const [entries, setEntries] = useState([])
  const { get } = useApi(useUnauthorizedHandler(), useErrorHandler())
  const url = useApiUrl(`home/journal_entries?journal_ids=${journals.map(j => j.id).join(',')}`)

  useEffect(() => {
    get(url).then(data => {
      // remove entries without mood column
      const filteredEntries = data.filter(entry => entry.content.mood)
      setEntries(filteredEntries)
    })
  }, []) //eslint-disable-line react-hooks/exhaustive-deps

  const getMatchingMoodByValue = mood => {
    return moods.find(m => m.value === mood) || {}
  }

  const getLineGraphData = () => {
    if (moods && moods.length > 0) {
      const parsedData = {
        id: 'mood',
        data: entries.map(entry => {
          return {
            x: moment(entry.content.entryDate).format(SHORT_DATE_FORMAT),
            y: getMatchingMoodByValue(entry.content.mood, {}).ranking
          }
        })
      }

      return [parsedData]
    } else return []
  }

  const getColor = colorIndex => {
    switch (colorIndex) {
      case 1:
        return '#f56565' //red
      case 2:
        return '#b83280' // pinkish purple
      case 3:
        return '#63b3ed' // blue
      case 4:
        return '#38b2ac' // green
      case 5:
        return '#faf089' // yellow
      default:
        return '#cbd5e0'
    }
  }

  const formatXAxisLabels = value => {
    return moment(value).format('MMM D')
  }

  const formatYAxisLabels = value => {
    const matchingMood = moods.find(m => m.ranking === value)
    if (matchingMood) return matchingMood.label
    else return value
  }

  return (
    <div className='h-64'>
      <LineChart
        data={getLineGraphData()}
        getColor={getColor}
        formatXAxisLabels={formatXAxisLabels}
        formatYAxisLabels={formatYAxisLabels}
      />
    </div>
  )
}
