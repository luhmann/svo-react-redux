import React from 'react'
import renderer from 'react-test-renderer'

import Category from './Category.jsx'

describe('Component: <Category />', () => {
  it('should map "breakfast"-category', () => {
    const component = renderer.create(
      <Category type="breakfast" />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should map "lunch"-category', () => {
    const component = renderer.create(
      <Category type="lunch" />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should map "dinner"-category', () => {
    const component = renderer.create(
      <Category type="dinner" />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should map "dessert"-category', () => {
    const component = renderer.create(
      <Category type="dessert" />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should map "snack"-category', () => {
    const component = renderer.create(
      <Category type="snack" />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should omit an unknown category', () => {
    const component = renderer.create(
      <Category type="foo" />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
