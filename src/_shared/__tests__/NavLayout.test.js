import React from 'react'
import { shallow } from 'enzyme'
import { NavLayout } from '../NavLayout'
import { Nav } from '../Nav'

let subject

describe('NavLayout', () => {
  let children
  beforeEach(() => {
    children = <div className='children'>children!</div>
    subject = shallow(<NavLayout>{children}</NavLayout>)
  })

  describe('render', () => {
    it('renders the site navigation', () => {
      expect(subject.find(Nav)).toHaveLength(1)
    })

    it('renders the provided children', () => {
      expect(subject.find('.children')).toHaveLength(1)
    })
  })
})
