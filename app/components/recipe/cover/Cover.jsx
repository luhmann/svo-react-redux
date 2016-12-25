import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import ExternalResponsiveImage from 'sharedComponents/ExternalResponsiveImage/ExternalResponsiveImage.jsx'
import styles from './Cover.styl'

const Cover = ({ img }) => (
  <ExternalResponsiveImage
    styleName='cover'
    img={img}
  />
)

Cover.propTypes = {
  img: React.PropTypes.object.isRequired
}

export default CSSModules(Cover, styles, CSSModuleConfig)
