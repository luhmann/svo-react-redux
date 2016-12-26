import React from 'react'
import { buildResImageUrl } from 'lib/UrlBuilder.js'

import {RESPONSIVE_IMAGE_SIZES} from '../../../constants/Common.js'

const buildSrcSet = (objectId, sizes) => {
  return sizes
    .map((size) => (
      `${buildResImageUrl(objectId, size)} ${size}w`
    ))
    .join(', ')
}

const ExternalResponsiveImage = ({ img, className = '', srcset = RESPONSIVE_IMAGE_SIZES, sizes = '100vw' }) => (
  <img
    className={className}
    src={buildResImageUrl(img.objectId)}
    srcSet={buildSrcSet(img.objectId, srcset)}
    sizes={sizes}
  />
)

ExternalResponsiveImage.propTypes = {
  img: React.PropTypes.shape({
    objectId: React.PropTypes.string.isRequired,
    credits: React.PropTypes.string
  }),
  className: React.PropTypes.string,
  srcset: React.PropTypes.array,
  sizes: React.PropTypes.string
}

export default ExternalResponsiveImage
