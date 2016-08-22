import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'
import { buildResImageUrl } from 'lib/UrlBuilder.js'

const buildSrcSet = (objectId, sizes) => {
  return sizes
    .map((size) => (
      `${buildResImageUrl(objectId, size)} ${size}w`
    ))
    .join(', ');
}

const ResponsiveImage = ({ img, className, srcset = [414, 1024, 1280, 1366, 1920, 2500], sizes = '100vw' }) => (
  <img 
    className={className}
    src={buildResImageUrl(img.objectId)}
    srcSet={buildSrcSet(img.objectId, srcset)}
    sizes={sizes}
  />
)

ResponsiveImage.propTypes = {
  img: React.PropTypes.object.isRequired
}

export default ResponsiveImage;
