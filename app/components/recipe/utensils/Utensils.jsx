import SVGInline from 'react-svg-inline'
import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Utensils.styl'

import potIcon from './icons/pot.svg'

const Utensils = ({utensils}) => (
  <section styleName="root">
    <SVGInline styleName="icon" svg={potIcon} title="Küchengeräte" />
    <div styleName="items">{ utensils.join(', ') }</div>
  </section>
)

Utensils.propTypes = {
  utensils: React.PropTypes.array
}

export default CSSModules(Utensils, styles, CSSModuleConfig)
