import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import ResponsiveImage from 'sharedComponents/ResponsiveImage/ResponsiveImage.jsx'
import styles from './Images.styl'


const Images = ({ images }) => (
  <ResponsiveImage 
    styleName='cover'
    styleId='cover' 
    img={img}
  />
)

Images.propTypes = {
  images: React.PropTypes.object.isRequired
}

export default CSSModules(Cover, styles, CSSModuleConfig)
