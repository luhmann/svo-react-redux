import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Difficulty.styl'

const Difficulty = ({ difficulty }) => (
  <section>
    <div>Aufwand</div>
    <div>{ difficulty } von 3</div>
  </section>
)

Difficulty.propTypes = {
  difficulty: React.PropTypes.number.isRequired
}

export default CSSModules(Difficulty, styles, CSSModuleConfig)
