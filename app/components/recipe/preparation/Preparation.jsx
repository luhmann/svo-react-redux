import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Preparation.styl'

import Step from './Step.jsx'

const Preparation = ({ preparation }) => (
  <section styleName="root">
    <header styleName='header'>Zubereitung</header>
    <div>
      { preparation.map((step, index) => <Step key={index} step={ step } />) }
    </div>
  </section>
)

Preparation.propTypes = {
  preparation: React.PropTypes.array.isRequired
}

export default CSSModules(Preparation, styles, CSSModuleConfig)
