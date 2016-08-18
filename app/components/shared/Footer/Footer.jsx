import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import styles from './Footer.styl'

const Footer = () => (
  <footer styleName='footer'>
    Footer
  </footer>
)

export default CSSModules(Footer, styles, CSSModuleConfig)
