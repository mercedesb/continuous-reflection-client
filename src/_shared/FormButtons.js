import React from 'react'
import { PrimaryButton, SecondaryButton } from '_shared'

export function FormButtons() {
  return (
    <div className='flex justify-end m-4 p-4'>
      <SecondaryButton>Cancel</SecondaryButton>
      <PrimaryButton className='ml-2' type='submit'>
        Save
      </PrimaryButton>
    </div>
  )
}
