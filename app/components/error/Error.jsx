import { React, CSSModules, CSSModuleConfig } from '../../lib/commonImports.js'
import styles from './Error.styl'

const Error = ({ message }) => (
  <div>{ message }</div>
)

Error.propTypes = {
  message: React.PropTypes.string.isRequired
}

export default CSSModules(Error, styles, CSSModuleConfig)
