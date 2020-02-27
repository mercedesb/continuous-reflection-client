import React from 'react'
import { shallow } from 'enzyme'
import { MoodsProvider } from 'contexts'
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
  describe('render', () => {
    beforeEach(() => {
      subject = shallow(<AddNewEntry />)
    })

    it('renders a MoodsProvider', () => {
      expect(subject.find(MoodsProvider)).toHaveLength(1)
    })

    describe('when the template is Professional Development', () => {
      it('renders a AddNewProfessionalDevelopmentEntry component', () => {
        expect(subject.find(AddNewProfessionalDevelopmentEntry)).toHaveLength(1)
      })
    })

    // skipped until I can figure out how to mock react-router-dom multiple times in a single test file
    xdescribe('when the template is Poetry', () => {
      it('renders a AddNewPoetryEntry component', () => {
        expect(subject.find(AddNewPoetryEntry)).toHaveLength(1)
      })
    })
  })
})
