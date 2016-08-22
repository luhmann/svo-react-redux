import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import ResponsiveImage from 'sharedComponents/ResponsiveImage/ResponsiveImage.jsx'
import styles from './Cover.styl'


const Cover = ({ img }) => (
  <ResponsiveImage 
    styleName='cover'
    styleId='cover' 
    img={img}
  />
)

Cover.propTypes = {
  img: React.PropTypes.object.isRequired
}

export default CSSModules(Cover, styles, CSSModuleConfig)
