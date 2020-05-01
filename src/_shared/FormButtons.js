import React from 'react'
import { useHistory } from 'react-router-dom'
import { PrimaryButton, SecondaryButton } from '_shared'

export function FormButtons({ handleCancelClick }) {
  let history = useHistory()

  const onCancelClick = () => {
    if (!!handleCancelClick) {
      handleCancelClick()
    } else {
      history.goBack()
    }
  }

  return (
    <div className='flex justify-end p-4'>
      <SecondaryButton onClick={onCancelClick}>Cancel</SecondaryButton>
      <PrimaryButton className='ml-2' type='submit'>
        Save
      </PrimaryButton>
    </div>
  )
}
