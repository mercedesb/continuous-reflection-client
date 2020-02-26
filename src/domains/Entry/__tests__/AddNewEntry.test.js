import React from 'react'
import { shallow } from 'enzyme'
import { AddNewEntry } from '../AddNewEntry'
// import { AddNewProfessionalDevelopmentEntry } from '../AddNewProfessionalDevelopmentEntry'
import { AddNewPoetryEntry } from '../AddNewPoetryEntry'

let subject

describe('AddNewEntry', () => {
  beforeEach(() => {})

  describe('render', () => {
    describe('when the template is Professional Development', () => {
      beforeEach(() => {})

      it('renders a AddNewProfessionalDevelopmentEntry component', () => {
        jest.doMock('react-router-dom', () => ({
          ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
          useLocation: () => ({
            state: {
              template: 'Professional Development'
            }
          })
        }))
        const {
          AddNewProfessionalDevelopmentEntry
        } = require('../AddNewProfessionalDevelopmentEntry')
        const { AddNewEntry } = require('../AddNewEntry')
        subject = shallow(<AddNewEntry />)
        expect(subject.find(AddNewProfessionalDevelopmentEntry)).toHaveLength(1)
      })
    })

    describe('when the template is Poetry', () => {
      beforeEach(() => {})

      it('renders a AddNewPoetryEntry component', () => {
        jest.doMock('react-router-dom', () => ({
          ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
          useLocation: () => ({
            state: {
              template: 'Poetry'
            }
          })
        }))
        expect(subject.find(AddNewPoetryEntry)).toHaveLength(1)
      })
    })
  })
})
