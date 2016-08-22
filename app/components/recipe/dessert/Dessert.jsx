import SVGInline from 'react-svg-inline'

import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Dessert.styl'

import cupcakeIcon from './icons/cupcake.svg'

const Dessert = ({ name, description }) => (
  <section styleName="root">
    <SVGInline styleName="icon" svg={cupcakeIcon} title="Zum Dessert" />
    <div styleName="text">
      <div styleName="name">{ name }</div>
      <div styleName="description">{ description }</div>
    </div>
  </section>
)

Dessert.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string
}

export default CSSModules(Dessert, styles, CSSModuleConfig)
