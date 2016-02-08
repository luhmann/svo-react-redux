import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Duration.styl'

import moment from 'moment'
import 'moment/locale/de'
import 'moment-duration-format'

const Duration = ({cooking, cooling, preparation}) => (
  <section>
    <header>Dauer</header>
    <div>Vorbereitung: {moment.duration(preparation, 's').format('h [hrs], m [min]')}</div>
    <div>Koch-/Backzeit: {moment.duration(cooking, 's').format('h [hrs], m [min]')}</div>
    <div>Abkühlen: {moment.duration(cooling, 's').format('h [hrs], m [min]')}</div>
  </section>
)

Duration.propTypes = {
  cooking: React.PropTypes.number,
  cooling: React.PropTypes.number,
  preparation: React.PropTypes.number
}

export default CSSModules(Duration, styles, CSSModuleConfig)
