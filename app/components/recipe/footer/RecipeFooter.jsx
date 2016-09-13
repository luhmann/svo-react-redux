import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'
import styles from './RecipeFooter.styl'


const RecipeFooter = (props) => (
  <footer styleName="root">
    Rezept drucken
  </footer>
)

export default CSSModules(RecipeFooter, styles, CSSModuleConfig)
