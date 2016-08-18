import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Description.styl'

const Description = ({text}) => (
  <section styleName='description'>{ text }</section>
)

Description.propTypes = {
  text: React.PropTypes.string.isRequired
}

export default CSSModules(Description, styles, CSSModuleConfig)
