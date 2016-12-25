import renderIf from 'render-if'
import SVGInline from 'react-svg-inline'
import { React } from 'lib/commonImports.js'
import styled from 'styled-components'
import { colors, dimensions, typography } from 'styles/variables.js'
import { buildRecipeUrl } from 'lib/UrlBuilder.js'

import copyIcon from './icons/copy.svg'
import copiedIcon from './icons/copied.svg'

let ifClipboardSupported

const Root = styled.section`
  font-size: 1.5em;
  font-family: ${typography.fonts.text};
  margin-bottom: ${dimensions.modules.marginBottom};
  padding: 0 ${dimensions.modules.vPadding};
`

const Link = styled.div`
  display: flex;
  margin-bottom: 0.5em;
  width: 100%;
`

const Url = styled.input`
  border: 1px solid ${colors.meanGray};
  border-radius: 4px;
  color: ${colors.text};
  flex-grow: 1;
  font-size: 0.75em;
  height: 3rem;
  margin-right: 4px;
  padding: 0 8px;
  -webkit-appearance: none;
`

const CopyButton = styled.div`
  background-color: ${colors.meanGray};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 3rem;
  width: 4rem;

  &:active, &:hover {
    background-color: ${colors.accent}
  }
`

const Explanation = styled.div`
  font-size: 0.75rem;
`

const Icon = styled(SVGInline)`
  color: ${colors.white};
  height: 2rem;
`

class Sharing extends React.Component {
  constructor (props) {
    super(props)

    ifClipboardSupported = renderIf(props.isClipboardSupported) 

    this.state = {
      copied: false
    }
  }

  selectText (event) {
    this._url.focus()
    this._url.select()
    this._url.setSelectionRange(0, 9999)
  }

  copyToClipboard () {
    this.selectText()
    document.execCommand('copy')

    this.setState({ copied: true })
  }

  render () {
    return (
      <Root>
        <Link>
          <Url
            innerRef={(c) => { this._url = c } }
            value={buildRecipeUrl(this.props.slug)}
            readOnly
            onClick={(event) => this.selectText(event)} />
          { ifClipboardSupported(
            <CopyButton onClick={() => this.copyToClipboard()}>
              <Icon svg={(this.state.copied) ? copiedIcon : copyIcon} cleanup={true} cleanupExceptions={['width', 'height']} classSuffix='' title='In die Zwischenablage kopieren' />
            </CopyButton>
          )}
        </Link>
        <Explanation>
          Zum Sharen kannst du die hier abgebildete URL kopieren und auf einer Seite deiner Wahl posten.
          { ifClipboardSupported(' Ein Klick auf den Button kopiert die URL direkt in die Zwischenablage.') }
        </Explanation>
      </Root>
    )
  }
}

Sharing.defaultProps = {
  isClipboardSupported: false
}

Sharing.propTypes = {
  slug: React.PropTypes.string.isRequired,
  isClipboardSupported: React.PropTypes.bool.isRequired
}

export default Sharing
