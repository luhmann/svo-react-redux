import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Ingredient.styl'

const Ingredient = (props) => (
  <div>
    { props.ingredient.amount} { props.ingredient.unit } { props.ingredient.label}
  </div>
)

Ingredient.propTypes = {
  ingredient: React.PropTypes.object.isRequired
}

export default CSSModules(Ingredient, styles, CSSModuleConfig)
