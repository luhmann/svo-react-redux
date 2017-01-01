import React from 'react'
import renderer from 'react-test-renderer'

import ScalerResponsiveImage from './ScalerResponsiveImage.jsx'

describe.only('Component: <ScalerResponsiveImage />', () => {
  it('should render a responsive image', () => {
    const img = {
      objectId: 'lh1nmgmqugmlopswifqt.jpg',
      credits: 'Jan Florian Dietrich'
    }

    const component = renderer.create(
      <ScalerResponsiveImage img={img} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
