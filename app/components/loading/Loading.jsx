import { React, CSSModules, CSSModuleConfig } from '../../lib/commonImports.js'
import styles from './Loading.styl'

import ExternalResponsiveImage from 'sharedComponents/ExternalResponsiveImage/ExternalResponsiveImage'

let backgroundImage = {
  objectId: 'honey_f0uwjn.jpg'
}

const Loading = (props) => (
  <section styleName='root'>
    <ExternalResponsiveImage styleName="image" img={backgroundImage} />
    <div styleName='message'>
      <div styleName='spinner'></div>
      <div styleName='text'>Laden</div>
    </div>
  </section>
)

Loading.propTypes = {}

export default CSSModules(Loading, styles, CSSModuleConfig)
