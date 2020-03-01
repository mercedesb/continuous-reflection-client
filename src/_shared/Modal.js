import React from 'react'
import { PrimaryButton, SecondaryButton } from '_shared'

export function Modal({ children, primaryButtonText, handleConfirmClick, handleCancelClick }) {
  const onCancelClick = e => {
    e.preventDefault()
    handleCancelClick()
  }

  return (
    <React.Fragment>
      <div className='absolute inset-0 bg-gray-600 opacity-50'></div>
      <div className='absolute inset-0 flex justify-center items-center'>
        <form className='bg-white rounded-sm px-8 pt-8 pb-4 opacity-100 w-2/5 flex flex-col'>
          {children}
          <div className='flex justify-end p-4 mt-8'>
            <SecondaryButton onClick={onCancelClick}>Cancel</SecondaryButton>
            <PrimaryButton className='ml-2' onClick={handleConfirmClick}>
              {primaryButtonText}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

Modal.propTypes = {}
