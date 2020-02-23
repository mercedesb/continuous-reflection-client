import React from 'react'
import { shallow } from 'enzyme'
import { Wrapper } from '../Wrapper'

let subject

describe('Wrapper', () => {
  let children
  let className

  beforeEach(() => {
    className = 'wrapper'
    children = <div className='children'>children!</div>
    subject = shallow(<Wrapper className={className}>{children}</Wrapper>)
  })

  describe('render', () => {
    it('renders a wrapping div', () => {
      expect(subject.find(`div.${className}`)).toHaveLength(1)
    })

    it('renders the provided children', () => {
      expect(subject.find('.children')).toHaveLength(1)
    })
  })
})
