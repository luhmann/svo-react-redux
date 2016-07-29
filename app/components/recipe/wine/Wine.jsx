import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Wine.styl'

const Wine = ({ wine }) => (
  <section>
    <div>Weinempfehlung</div>
    <div>{ wine }</div>
  </section>
)

Wine.propTypes = {
  wine: React.PropTypes.string
}

export default CSSModules(Wine, styles, CSSModuleConfig)
