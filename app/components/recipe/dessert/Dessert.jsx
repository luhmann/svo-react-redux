import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Dessert.styl'

const Dessert = ({ dessert }) => (
  <section>
    <div>Zum Nachtisch</div>
    <div>{ dessert }</div>
  </section>
)

Dessert.propTypes = {
  dessert: React.PropTypes.string
}

export default CSSModules(Dessert, styles, CSSModuleConfig)
