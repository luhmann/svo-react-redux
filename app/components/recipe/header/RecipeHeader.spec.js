import React from 'react'
import test from 'tape'
import { render } from 'enzyme'

import RecipeHeader from './RecipeHeader.jsx'

test('Component: <RecipeHeader />', t => {
  t.test('should not render subheadline if props are not passed', t => {
    let code = render(<RecipeHeader />)

    t.equal(code.find('.subtitle').length, 0, 'subheadline is not rendered')
    t.end()
  })

  t.test('should render subheadline if passed in props', t => {
    let testString = 'This is a test'
    let code = render(<RecipeHeader subtitle={ testString } />)

    t.equal(code.find('.subtitle').length, 1, 'subheadline rendered')
    t.equal(code.find('.subtitle').text(), testString, 'content as expected')
    t.end()
  })
})
