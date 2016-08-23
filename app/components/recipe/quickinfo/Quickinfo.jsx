import SVGInline from 'react-svg-inline'
import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Quickinfo.styl'

import skinnyIcon from './icons/skinny.svg'
import quickIcon from './icons/quick.svg'
import restTimeIcon from './icons/rest_time.svg'
import vegetarianIcon from './icons/vegetarian.svg'

const Quickinfo = ({ quickinfo }) => (
  <section styleName='quickinfo'>
    <SVGInline styleName={(quickinfo.skinny) ? 'icon-active' : 'icon'} svg={skinnyIcon} cleanup={true} classSuffix='' title='kalorienarm' />
    <SVGInline styleName={(quickinfo.vegetarian) ? 'icon-active' : 'icon'} svg={vegetarianIcon} cleanup={true} classSuffix='' title='vegetarisch' />
    <SVGInline styleName={(quickinfo.quick) ? 'icon-active' : 'icon'} svg={quickIcon} cleanup={true} cleanupExceptions={['width', 'height']} classSuffix='' title='schnell' />
    <SVGInline styleName={(quickinfo.restTime) ? 'icon-active' : 'icon'} svg={restTimeIcon} cleanup={true} cleanupExceptions={['width', 'height']} classSuffix='' title='zeitaufwendig' />
  </section>
)

Quickinfo.propTypes = {
  quickinfo: React.PropTypes.object.isRequired
}

export default CSSModules(Quickinfo, styles, CSSModuleConfig)
