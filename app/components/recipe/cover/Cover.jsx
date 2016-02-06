import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Cover.styl'

const Cover = (props) => (
  <div>
    <img styleName='cover' src={ props.src } width={ props.width } height={props.height} />
  </div>
)

Cover.propTypes = {
  src: React.PropTypes.string.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number
}

export default CSSModules(Cover, styles, CSSModuleConfig)
