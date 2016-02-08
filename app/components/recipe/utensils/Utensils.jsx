import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Utensils.styl'

const Utensils = ({utensils}) => (
  <section>
    <div>Küchengeräte</div>
    <div>{ utensils.join(',') }</div>
  </section>
)

Utensils.propTypes = {
  utensils: React.PropTypes.array
}

export default CSSModules(Utensils, styles, CSSModuleConfig)
