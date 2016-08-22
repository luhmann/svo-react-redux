import moment from 'moment'
import 'moment/locale/de'
import nl2br from 'react-nl2br'

import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import { Cover, Category, Quickinfo } from '../index.js'
import styles from './RecipeHeader.styl'

const RecipeHeader = ({cover, title, category, quickinfo}) => (
  <header styleName='recipe-header'>
    <Cover img={cover}/>
    <section styleName='meta'>
      <h2 styleName='title'>{ nl2br(title) }</h2>
      <Category type={category} />
      <Quickinfo quickinfo={quickinfo}/>
    </section>
  </header>
)

RecipeHeader.propTypes = {
  cover: React.PropTypes.object,
  title: React.PropTypes.string,
  category: React.PropTypes.string,
  quickinfo: React.PropTypes.object
}

export default CSSModules(RecipeHeader, styles, CSSModuleConfig)
