import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import styles from './Ingredient.styl'

const mapAmount = (amount) => {
  const mappingTable = {
    '0.25': '¼', 
    '0.75': '¾',
    '0.5': '½'
  }

  return mappingTable[amount] || amount
}

const Ingredient = ({ ingredient }) => (
  <div styleName="root">
    <span styleName="amount">
      { mapAmount(ingredient.amount) } { ingredient.unit }
    </span>
    <span styleName="label">
      { ingredient.label }
    </span>
     
  </div>
)

Ingredient.propTypes = {
  ingredient: React.PropTypes.object.isRequired
}

export default CSSModules(Ingredient, styles, CSSModuleConfig)
