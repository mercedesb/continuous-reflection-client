import React from 'react'
import { shallow } from 'enzyme'
import { FormButtons } from '../FormButtons'
import { PrimaryButton } from '../PrimaryButton'
import { SecondaryButton } from '../SecondaryButton'

let subject

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
