import React from 'react'

import RESPONSIVE_IMAGE_SIZES from '../../../constants/Common.js'

const SIZES_CONFIG_STRING = RESPONSIVE_IMAGE_SIZES
  .map((size) => (`sizes[]=${size}w`))
  .join('')

class ResponsiveImage extends React.Component {
  constructor (props) {
    super(props)

    let { path } = props

    this.responsiveSet = require(`resize-image?${SIZES_CONFIG_STRING}&placeholder=20&blur=40!${path}`)
    this.img = require(`${path}`)

    this.state = {
      loaded: false
    }
  }

  render () {
    return (
      <div>
        <img
          src={this.responsiveSet.placeholder}
          style={{
            opacity: (this.state.loaded ? 1 : 0)
          }}
          />
      </div>
    )
  }
}

ResponsiveImage.propTypes = {
  path: React.PropTypes.string.isRequired
}

export default ResponsiveImage
