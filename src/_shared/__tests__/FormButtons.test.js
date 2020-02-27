import React from 'react'
import { shallow } from 'enzyme'
import { FormButtons } from '../FormButtons'
import { PrimaryButton } from '../PrimaryButton'
import { SecondaryButton } from '../SecondaryButton'

let subject

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useHistory: () => ({ push: jest.fn() })
}))

describe('FormButtons', () => {
  beforeEach(() => {
    subject = shallow(<FormButtons />)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find(PrimaryButton)).toHaveLength(1)
      expect(subject.find(SecondaryButton)).toHaveLength(1)
    })
  })
})
