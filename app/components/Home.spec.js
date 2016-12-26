import React from 'react'
import { shallow } from 'enzyme'

import Home from './Home.jsx'

describe('Component: <Home />', () => {
  it('should find an h1-headline', () => {
    let code = shallow(<Home />)

    expect(code.find('h1').length).toBe(1)
  })
})
