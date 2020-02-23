import React from 'react'
import { shallow, mount } from 'enzyme'
import { Route, Redirect, BrowserRouter } from 'react-router-dom'
import { NavLayout } from '_shared'
import { AuthenticatedRoute } from '../AuthenticatedRoute'

let subject

xdescribe('AuthenticatedRoute', () => {
  beforeEach(() => {
    subject = mount(
      <BrowserRouter>
        <AuthenticatedRoute component={() => <div className='test'>Test!</div>} />
      </BrowserRouter>
    )
  })

  describe('render', () => {
    it('renders a route', () => {
      expect(subject.find(Route)).toHaveLength(1)
    })

    describe('when the user is authenticated', () => {
      beforeEach(() => {
        localStorage.setItem('token', 'token')
      })

      afterEach(() => {
        localStorage.removeItem('token')
      })

      it('renders a NavLayout', () => {
        let route = subject.find(Route).first()

        expect(
          route
            .prop('render')()
            .find(NavLayout)
        ).toHaveLength(1)
      })

      it('renders the provided component', () => {
        expect(subject.find('.test')).toHaveLength(1)
      })
    })

    describe('when the user is not authenticated', () => {
      it('renders a Redirect', () => {
        expect(subject.find(Redirect)).toHaveLength(1)
      })
    })
  })
})
