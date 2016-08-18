import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Subtitle.styl'

const Dessert = ({ text }) => (
  <div styleName='subtitle'>{ text }</div>
)

Dessert.propTypes = {
  text: React.PropTypes.string
}

export default CSSModules(Dessert, styles, CSSModuleConfig)
