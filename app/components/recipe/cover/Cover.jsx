import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Cover.styl'

const Cover = (props) => (
  <div>
    <img styleName='cover' src={ props.src } width={ props.width } height={props.height} />
  </div>
)

Cover.propTypes = {
  img: React.PropTypes.string
}

export default CSSModules(Cover, styles, CSSModuleConfig)
