import React from 'react'
import renderer from 'react-test-renderer'

import ExternalResponsiveImage from './ExternalResponsiveImage.jsx'

describe.only('Component: <ExternalResponsiveImage />', () => {
  it('should render a responsive image', () => {
    const img = {
      objectId: 'lh1nmgmqugmlopswifqt',
      credits: 'Jan Florian Dietrich'
    }

    const component = renderer.create(
      <ExternalResponsiveImage img={img} />
    )

    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
