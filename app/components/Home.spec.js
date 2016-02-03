import React from 'react'
import test from 'tape'
import { shallow } from 'enzyme'

import Home from './Home.jsx'

test('Component: <Home />', t => {
  let code = shallow(<Home />)

  t.equal(code.find('h1').length, 1)
  t.end()
})
