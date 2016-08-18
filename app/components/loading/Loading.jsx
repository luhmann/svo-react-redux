import { React, CSSModules, CSSModuleConfig } from '../../lib/commonImports.js'
import styles from './Loading.styl'

const Loading = (props) => (
  <section styleName='loading'></section>
)

Loading.propTypes = {}

export default CSSModules(Loading, styles, CSSModuleConfig)
