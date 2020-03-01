import React from 'react'
import { ResponsiveLine } from '@nivo/line'

// available props: size, color, borderColor, borderWidth, datum
function CustomSymbol({ size, getColor, borderWidth, datum }) {
  const { y } = datum
  const color = getColor(y)

  return (
    <g>
      <circle fill='#fff' r={size / 2} strokeWidth={borderWidth} stroke={color} />
      <circle r={size / 4} strokeWidth={borderWidth} stroke={color} fill={color} fillOpacity={1} />
    </g>
  )
}

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
export function LineChart({ data, getColor, formatXAxisLabels, formatYAxisLabels }) {
  return (
    <ResponsiveLine
      data={data}
      curve='monotoneX'
      margin={{ top: 24, right: 24, bottom: 48, left: 112 }}
      xScale={{
        type: 'time',
        format: '%Y-%m-%d',
        precision: 'day'
      }}
      xFormat='time:%Y-%m-%d'
      enableGridX={false}
      yScale={{ type: 'linear', min: 1 }}
      yFormat={formatYAxisLabels}
      enableGridY={false}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: 'bottom',
        tickRotation: -35,
        tickValues: 'every 7 days',
        format: formatXAxisLabels
      }}
      axisLeft={{
        orient: 'left',
        tickPadding: 8,
        tickValues: 5,
        format: formatYAxisLabels
      }}
      colors={() => getColor(0)}
      lineWidth={6}
      pointSize={15}
      pointSymbol={props => CustomSymbol({ getColor, ...props })}
      pointBorderWidth={2}
      pointLabel='y'
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[]}
      theme={{
        axis: {
          ticks: {
            text: {
              fill: '#0e1111',
              fontSize: '.875rem',
              fontFamily:
                'Open Sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"'
            }
          }
        }
      }}
    />
  )
}
