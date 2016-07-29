import SVGInline from 'react-svg-inline'
import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import {Title} from '../index.js'
import styles from './Header.styl'
import logoSVG from 'assets/logo.svg'

const Header = () => (
  <header styleName="header">
    <SVGInline styleName="logo" svg={logoSVG} title="Stove vs. Oven" />
  </header>
)

export default CSSModules(Header, styles, CSSModuleConfig)
