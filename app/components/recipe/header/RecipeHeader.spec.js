import React from 'react'
import { render } from 'enzyme'

import RecipeHeader from './RecipeHeader.jsx'

xdescribe('Component: <RecipeHeader />', () => {
  it('should not render subheadline if props are not passed', () => {
    let code = render(<RecipeHeader />)

    expect(code.find('.subtitle').length).toBe(0)
  })

  it('should render subheadline if passed in props', () => {
    let testString = 'This is a test'
    let code = render(<RecipeHeader subtitle={ testString } />)

    expect(code.find('.subtitle').length).toBe(1)
    expect(code.find('.subtitle').text()).toBe(testString)
  })
})
