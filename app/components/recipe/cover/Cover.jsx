import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'
import { buildResImageUrl } from 'lib/UrlBuilder.js'

import styles from './Cover.styl'

const buildSrcSet = (objectId) => {
  const sizes = [414, 1024, 1280, 1366, 1920, 2500]
  
  return sizes
    .map((size) => (
      `${buildResImageUrl(objectId, size)} ${size}w`
    ))
    .join(', ');
}

const Cover = ({ img, width, height }) => (
  <img 
    styleName='cover' 
    src={buildResImageUrl(img.objectId)}
    srcSet={buildSrcSet(img.objectId)}
    sizes="100vw"
  />
)

Cover.propTypes = {
  img: React.PropTypes.object.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number
}

export default CSSModules(Cover, styles, CSSModuleConfig)
