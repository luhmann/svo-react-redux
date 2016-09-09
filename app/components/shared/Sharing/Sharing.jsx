import renderIf from 'render-if'
import SVGInline from 'react-svg-inline'
import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'
import { buildRecipeUrl } from 'lib/UrlBuilder.js'

import styles from './Sharing.styl'
import copyIcon from './icons/copy.svg'
import copiedIcon from './icons/copied.svg'

const ifClipboardSupported = renderIf(document.queryCommandSupported('copy'))

class Sharing extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      copied: false
    }
  }

  selectText(event) {
    this._url.focus()
    this._url.select()
    this._url.setSelectionRange(0, 9999)
  }

  copyToClipboard() {
    this.selectText()
    document.execCommand('copy')
    
    this.setState({ copied: true })
  }

  render() {
    return (
      <section styleName="root">
        <div styleName="link">
          <input
            ref={(c) => this._url = c }
            styleName="url"
            value={buildRecipeUrl(this.props.slug)}
            readOnly
            onClick={(event) => this.selectText(event)} />
          { ifClipboardSupported(
            <div styleName="copy" onClick={() => this.copyToClipboard()}>
              <SVGInline styleName="icon" svg={(this.state.copied) ? copiedIcon : copyIcon} cleanup={true} cleanupExceptions={['width', 'height']} classSuffix='' title='In die Zwischenablage kopieren' />
            </div>
          )}
        </div>
        <div styleName="explanation">
          Zum Sharen kannst du die hier abgebildete URL kopieren und auf einer Seite deiner Wahl posten.
          { ifClipboardSupported(' Ein Klick auf den Button kopiert die URL direkt in deine Zwischenablage.') }
        </div>
      </section>
    )
  }
}


export default CSSModules(Sharing, styles, CSSModuleConfig)
