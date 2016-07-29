import moment from 'moment'
import 'moment/locale/de'

import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'
import { If, Then } from 'react-if'

import {Cover} from '../index.js'
import styles from './RecipeHeader.styl'

const RecipeHeader = ({cover, title, subtitle, published}) => (
  <header>
    <Cover img={cover}/>
    <h2 styleName='title'>{title}</h2>
    <If condition={!!subtitle}>
      <Then><div styleName='subtitle'>{subtitle}</div></Then>
    </If>
    <div>Veröffentlicht am: { moment(published).format('Do MMMM YYYY, HH:mm:ss') }</div>
  </header>
)

RecipeHeader.propTypes = {
  cover: React.PropTypes.object,
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string,
  published: React.PropTypes.number
}

export default CSSModules(RecipeHeader, styles, CSSModuleConfig)
