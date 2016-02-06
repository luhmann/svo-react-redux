import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './IngredientsList.styl'

import Ingredient from './Ingredient.jsx'

const IngredientsList = (props) => (
  <section>
    { props.ingredients.map((ingredient, index) => <Ingredient key={index} ingredient={ ingredient } />)}
  </section>
)

IngredientsList.propTypes = {
  ingredients: React.PropTypes.array.isRequired
}

export default CSSModules(IngredientsList, styles, CSSModuleConfig)
