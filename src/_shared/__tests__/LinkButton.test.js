import React from 'react'
import { shallow } from 'enzyme'
import { LinkButton } from '../LinkButton'

let subject

describe('LinkButton', () => {
  let href

  beforeEach(() => {
    href = 'href'
    subject = shallow(<LinkButton href={href}>Click me!</LinkButton>)
  })

  describe('render', () => {
    it('renders correctly', () => {
      expect(subject.find('a')).toHaveLength(1)
    })

    it('passes all of the props except color through', () => {
      const a = subject.find('a').first()
      expect(a.prop('href')).toEqual(href)
    })

    describe('with a color prop', () => {
      let color

      beforeEach(() => {
        href = href
        color = 'bg-green-800'
        subject = shallow(
          <LinkButton href={href} color={color}>
            Click me!
          </LinkButton>
        )
      })

      it('appends the color prop to the className of the the button', () => {
        expect(subject.find(`a.${color}`)).toHaveLength(1)
      })
    })
  })
})
