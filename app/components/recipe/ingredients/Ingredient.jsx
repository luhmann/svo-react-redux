import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Ingredient.styl'

const Ingredient = ({ ingredient }) => (
  <div>
    { ingredient.amount } { ingredient.unit } { ingredient.label }
  </div>
)

Ingredient.propTypes = {
  ingredient: React.PropTypes.object.isRequired
}

export default CSSModules(Ingredient, styles, CSSModuleConfig)
