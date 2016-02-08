import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Nutrition.styl'

const Nutrition = ({carbs, cal, fat, protein}) => (
  <section>
    <div>Nährwerte pro Portion</div>
    <div>Kalorien { cal } / Eiweiß { protein }g / Kohlenhydrate { carbs }g / Fett { fat }g</div>
  </section>
)

Nutrition.propTypes = {
  carbs: React.PropTypes.number,
  cal: React.PropTypes.number,
  fat: React.PropTypes.number,
  protein: React.PropTypes.number
}

export default CSSModules(Nutrition, styles, CSSModuleConfig)
