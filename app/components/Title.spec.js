import React from 'react'
import test from 'tape'
import { render } from 'enzyme'

import Title from './Title.jsx'

test('Component: <Title />', t => {
  let code = render(<Title text='Hello World' />)

  t.equal(code.find('div').text(), 'Hello World', 'Text gets rendered correctly')
  t.end()
})
