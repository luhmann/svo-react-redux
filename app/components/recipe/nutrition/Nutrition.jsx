import SVGInline from 'react-svg-inline'
import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Nutrition.styl'

import kcalIcon from './icons/kcal.svg'

const Nutrition = ({carbs, cal, fat, protein}) => (
  <section styleName="root">
    <SVGInline styleName="icon" svg={kcalIcon} title="Nährwerte"/>
    <div styleName="calories">Kalorien { cal } / Eiweiß { protein }g / Kohlenhydrate { carbs }g / Fett { fat }g</div>
  </section>
)

Nutrition.propTypes = {
  carbs: React.PropTypes.number,
  cal: React.PropTypes.number,
  fat: React.PropTypes.number,
  protein: React.PropTypes.number
}

export default CSSModules(Nutrition, styles, CSSModuleConfig)
