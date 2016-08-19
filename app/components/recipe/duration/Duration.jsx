import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Duration.styl'

import moment from 'moment'
import 'moment/locale/de'
import 'moment-duration-format'

import Gauge from 'sharedComponents/Gauge/Gauge.jsx'

const Duration = ({cooking, cooling, preparation}) => (
  <section styleName='duration'>
    <Gauge filledPercent={ preparation / 3600 } title="Vorbereitung" label={moment.duration(preparation, 's').format('h [hrs], m [min]')} />
    <Gauge filledPercent={ cooking / 3600 } title="Backzeit" label={moment.duration(cooking, 's').format('h [hrs], m [min]')} />
    <Gauge filledPercent={ cooling / 3600 } title="Ruhezeit" label={moment.duration(cooling, 's').format('h [hrs], m [min]')} />
  </section>
)

Duration.propTypes = {
  cooking: React.PropTypes.number,
  cooling: React.PropTypes.number,
  preparation: React.PropTypes.number
}

export default CSSModules(Duration, styles, CSSModuleConfig)
