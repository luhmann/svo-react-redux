import SVGInline from 'react-svg-inline'
import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Wine.styl'

import glassIcon from './icons/glass.svg'

const Wine = ({ name, description }) => (
  <section styleName="root">
    <SVGInline styleName="icon" svg={glassIcon} title="Weinempfehlung" />
    <div styleName="text">
      <div styleName="name">{ name }</div>
      <div styleName="description">{ description }</div>
    </div>
  </section>
)

Wine.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string
}

export default CSSModules(Wine, styles, CSSModuleConfig)
