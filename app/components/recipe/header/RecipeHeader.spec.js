import React from 'react'
import test from 'tape'
import { render } from 'enzyme'

import RecipeHeader from './RecipeHeader.jsx'

test('Component: <RecipeHeader />', t => {
  let code = render(<RecipeHeader />)

  t.equal(code.find('.headline').length, 1)
  t.end()
})
