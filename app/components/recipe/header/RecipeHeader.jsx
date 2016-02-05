import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './RecipeHeader.styl'

import moment from 'moment'
import 'moment/locale/de'

const RecipeHeader = (props) => (
  <header>
    <h1 styleName='headline'>{ props.title }</h1>
    <div>{ props.subtitle }</div>
    <div>Veröffentlicht am: { moment(props.published, 'X').format('Do MMMM YYYY, HH:mm:ss') }</div>
  </header>
)

RecipeHeader.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  published: React.PropTypes.number
}

export default CSSModules(RecipeHeader, styles, CSSModuleConfig)
