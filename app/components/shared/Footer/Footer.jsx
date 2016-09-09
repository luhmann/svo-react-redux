import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import styles from './Footer.styl'

const Footer = () => (
  <footer styleName='root'>
    &copy; 2016 Stove vs. Oven
  </footer>
)

export default CSSModules(Footer, styles, CSSModuleConfig)
