import React from 'react'
import { shallow } from 'enzyme'
import { AddNewEntry } from '../AddNewEntry'
import { AddNewProfessionalDevelopmentEntry } from '../AddNewProfessionalDevelopmentEntry'

let subject

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useLocation: () => ({
    state: {
      template: 'Professional Development'
    }
  })
}))

describe('AddNewEntry', () => {
  beforeEach(() => {
    subject = shallow(<AddNewEntry />)
  })

  describe('render', () => {
    describe('when the template is Professional Development', () => {
      it('renders a AddNewProfessionalDevelopmentEntry component', () => {
        expect(subject.find(AddNewProfessionalDevelopmentEntry)).toHaveLength(1)
      })
    })

    xdescribe('when the template is Poetry', () => {
      it('renders a AddNewPoetryEntry component', () => {})
    })
  })
})
