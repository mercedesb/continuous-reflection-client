import React from 'react'
import { mount } from 'enzyme'
import { PrimaryButton, SecondaryButton } from '_shared'
import { Modal } from '../Modal'

let subject
let primaryButtonText
let handleConfirmClick = jest.fn()
let handleCancelClick = jest.fn()

describe('Modal', () => {
  beforeEach(() => {
    primaryButtonText = 'Confirm'
    subject = mount(
      <Modal
        primaryButtonText={primaryButtonText}
        handleCancelClick={handleCancelClick}
        handleConfirmClick={handleConfirmClick}
      >
        <h2>Are you sure?</h2>
      </Modal>
    )
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('form')).toHaveLength(1)
      expect(subject.find(SecondaryButton)).toHaveLength(1)
      expect(subject.find(PrimaryButton)).toHaveLength(1)
    })

    it('sets the text of the PrimaryButton', () => {
      const primaryButton = subject.find(PrimaryButton).first()
      expect(primaryButton.text()).toEqual(expect.stringContaining(primaryButtonText))
    })
  })

  describe('when clicking the cancel button', () => {
    it('calls the passed in handler', () => {
      const secondaryButton = subject.find(SecondaryButton).first()
      secondaryButton.simulate('click', { preventDefault: jest.fn() })
      expect(handleCancelClick).toHaveBeenCalled()
    })
  })

  describe('when clicking the confirm button', () => {
    it('calls the passed in handler', () => {
      const primaryButton = subject.find(PrimaryButton).first()
      primaryButton.simulate('click')
      expect(handleConfirmClick).toHaveBeenCalled()
    })
  })
})
