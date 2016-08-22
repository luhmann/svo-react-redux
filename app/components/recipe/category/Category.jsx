import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import styles from './Category.styl'

const categoryMapping = {
  breakfast: 'Frühstück',
  lunch: 'Mittagessen',
  dinner: 'Abendessen',
  dessert: 'Dessert & Backen',
  snack: 'Kleinigkeiten & Snacks'
}

const Category = ({ type }) => (
  <div styleName='category'>{ categoryMapping[type] }</div>
)

export default CSSModules(Category, styles, CSSModuleConfig)
