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

    it('passes all of the props except color through', () => {
      const button = subject.find('button').first()
      expect(button.prop('onClick')).toEqual(onClick)
    })

    describe('with a color prop', () => {
      let color

      beforeEach(() => {
        onClick = jest.fn()
        color = 'bg-green-800'
        subject = shallow(
          <Button onClick={onClick} color={color}>
            Click me!
          </Button>
        )
      })

      it('appends the color prop to the className of the the button', () => {
        expect(subject.find(`button.${color}`)).toHaveLength(1)
      })
    })
  })
})
