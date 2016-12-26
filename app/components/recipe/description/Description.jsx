import renderIf from 'render-if'
import React from 'react'
import styled from 'styled-components'
import { dimensions, typography } from 'styles/variables.js'

const Root = styled.section`
  font-family: ${typography.fonts.text}
  line-height: ${typography.lineHeight}
  padding 0 5% ${dimensions.modules.marginBottom}
`

const Description = ({text}) => {
  return renderIf(text)(
    <Root>{ text }</Root>
  )
}

Description.propTypes = {
  text: React.PropTypes.string.isRequired
}

export default Description
