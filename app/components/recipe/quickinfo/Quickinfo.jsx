import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Quickinfo.styl'

const Quickinfo = ({ quickinfo }) => (
  <section>
    <div>Schnellinformation</div>
    <div>
      kalorienarm: { quickinfo.skinny ? 'Ja' : 'Nein' } /
      glutenfrei: { quickinfo.glutenFree ? 'Ja' : 'Nein' } /
      längere Ruhezeit: { quickinfo.restTime ? 'Ja' : 'Nein' } /
      vegetarisch: { quickinfo.vegetarian ? 'Ja' : 'Nein' }
    </div>
  </section>
)

Quickinfo.propTypes = {
  quickinfo: React.PropTypes.object.isRequired
}

export default CSSModules(Quickinfo, styles, CSSModuleConfig)
