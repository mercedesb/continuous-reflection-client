import React, { useContext } from 'react'
import { MoodsContext } from 'contexts'
import { InputLabel } from './InputLabel'

export function MoodsOptions({ handleChange, selectedMood }) {
  const { moods } = useContext(MoodsContext)

  return (
    <div role='group' aria-labelledby='mood-label' className='flex items-center m-4 p-4'>
      <div id='mood-label' className='w-1/6 mx-4 break-words'>
        Mood
      </div>
      <div className='flex px-4 py-2 w-5/6'>
        {moods &&
          moods.length > 0 &&
          moods.map(mood => (
            <div className='mx-4'>
              <input
                type='radio'
                title='mood'
                id={mood.value}
                value={mood.value}
                checked={selectedMood === mood.value}
                onChange={handleChange}
              />
              <InputLabel name={mood.value} label={mood.label} />
            </div>
          ))}
      </div>
    </div>
  )
}
