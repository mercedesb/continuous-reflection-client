import React from 'react'
import { useHistory } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from '_shared'

export function FormButtons() {
  let history = useHistory()

  return (
    <div className='flex justify-end m-4 p-4'>
      <SecondaryButton onClick={() => history.goBack()}>Cancel</SecondaryButton>
      <PrimaryButton className='ml-2' type='submit'>
        Save
      </PrimaryButton>
    </div>
  )
}
