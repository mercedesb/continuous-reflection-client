import React from 'react'
import { MoodsContext } from 'contexts'
import { RadioToggle } from '_shared'

export function MoodsOptions({ handleChange, selectedMood }) {
  const { moods } = React.useContext(MoodsContext)

  return (
    <div role='group' aria-labelledby='mood-label' className='flex items-center p-4'>
      <div id='mood-label' className='w-1/6 mx-4 break-words'>
        Mood
      </div>
      <div className='flex px-4 py-2 w-5/6 flex-wrap'>
        {moods &&
          moods.length > 0 &&
          moods.map(mood => (
            <div className='mr-4 mb-4' key={mood.value}>
              <RadioToggle
                title='mood'
                id={mood.value}
                value={mood.value}
                checked={selectedMood === mood.value}
                label={mood.label}
                handleChange={handleChange}
              />
            </div>
          ))}
      </div>
    </div>
  )
}
