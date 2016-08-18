import moment from 'moment'
import 'moment/locale/de'

import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'
import { If, Then } from 'react-if'

import { Cover, Category, Quickinfo } from '../index.js'
import styles from './RecipeHeader.styl'

const RecipeHeader = ({cover, title, category, quickinfo}) => (
  <header styleName='recipe-header'>
    <Cover img={cover}/>
    <section styleName='meta'>
      <h2 styleName='title'>{title}</h2>
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
