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

    it('passes all of the props except className through', () => {
      const a = subject.find('a').first()
      expect(a.prop('href')).toEqual(href)
    })

    describe('with a className prop', () => {
      let className

      beforeEach(() => {
        href = href
        className = 'bg-green-800'
        subject = shallow(
          <LinkButton href={href} className={className}>
            Click me!
          </LinkButton>
        )
      })

      it('appends the className prop to the className of the the button', () => {
        expect(subject.find(`a.${className}`)).toHaveLength(1)
      })
    })
  })
})
