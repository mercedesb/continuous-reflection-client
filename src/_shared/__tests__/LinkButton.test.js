import React from 'react'
import { shallow } from 'enzyme'
import { LinkAsButton } from '../LinkAsButton'

let subject

describe('LinkAsButton', () => {
  let href

  beforeEach(() => {
    href = 'href'
    subject = shallow(<LinkAsButton href={href}>Click me!</LinkAsButton>)
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
          <LinkAsButton href={href} className={className}>
            Click me!
          </LinkAsButton>
        )
      })

      it('appends the className prop to the className of the the button', () => {
        expect(subject.find(`a.${className}`)).toHaveLength(1)
      })
    })
  })
})
