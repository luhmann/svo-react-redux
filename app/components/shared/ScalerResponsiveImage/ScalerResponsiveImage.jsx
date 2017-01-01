import React from 'react'
import { buildScalerImageUrl } from 'lib/UrlBuilder.js'

import {RESPONSIVE_IMAGE_SIZES} from '../../../constants/Common.js'

const buildSrcSet = (objectId, sizes) => {
  return sizes
    .map((size) => (
      `${buildScalerImageUrl(objectId, size)} ${size}w`
    ))
    .join(', ')
}

const ScalerResponsiveImage = ({ img, className = '', srcset = RESPONSIVE_IMAGE_SIZES, sizes = '100vw' }) => (
  <img
    className={className}
    src={buildScalerImageUrl(img.objectId)}
    srcSet={buildSrcSet(img.objectId, srcset)}
    sizes={sizes} />
)

ScalerResponsiveImage.propTypes = {
  img: React.PropTypes.shape({
    objectId: React.PropTypes.string.isRequired,
    credits: React.PropTypes.string
  }),
  className: React.PropTypes.string,
  srcset: React.PropTypes.array,
  sizes: React.PropTypes.string
}

export default ScalerResponsiveImage
