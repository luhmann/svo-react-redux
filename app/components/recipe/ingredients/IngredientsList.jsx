import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './IngredientsList.styl'

import Ingredient from './Ingredient.jsx'

const IngredientsList = ({ ingredients, servings }) => (
  <section styleName='root'>
    <header styleName='header'>
      Zutaten für {servings} { (servings === 1) ? 'Portion' : 'Portionen' }
    </header>
    <div styleName='ingredients'>
        { ingredients.map((ingredient, index) => <Ingredient key={index} ingredient={ ingredient } />) }
    </div>

  </section>
)

IngredientsList.propTypes = {
  ingredients: React.PropTypes.array.isRequired,
  servings: React.PropTypes.number.isRequired
}

export default CSSModules(IngredientsList, styles, CSSModuleConfig)
