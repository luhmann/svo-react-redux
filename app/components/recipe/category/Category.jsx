import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import styles from './Category.styl'

const categoryMapping = {
  dessert: 'Dessert & Backen'
}

const Category = ({ type }) => (
  <div styleName='category'>{ categoryMapping[type] }</div>
)

export default CSSModules(Category, styles, CSSModuleConfig)
