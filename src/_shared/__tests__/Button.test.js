import React from 'react'
import { shallow } from 'enzyme'
import { Button } from '../Button'

let subject

describe('Button', () => {
  let onClick
  beforeEach(() => {
    onClick = jest.fn()
    subject = shallow(<Button onClick={onClick}>Click me!</Button>)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('button')).toHaveLength(1)
    })

    it('passes all of the props except className through', () => {
      const button = subject.find('button').first()
      expect(button.prop('onClick')).toEqual(onClick)
    })

    describe('with a className prop', () => {
      let className

      beforeEach(() => {
        onClick = jest.fn()
        className = 'bg-green-800'
        subject = shallow(
          <Button onClick={onClick} className={className}>
            Click me!
          </Button>
        )
      })

      it('appends the className prop to the className of the the button', () => {
        expect(subject.find(`button.${className}`)).toHaveLength(1)
      })
    })
  })
})
