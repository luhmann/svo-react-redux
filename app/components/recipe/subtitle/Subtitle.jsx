import React from 'react'
import styled from 'styled-components'
import { dimensions, typography } from 'styles/variables.js'

const Root = styled.div`
  font-family: ${typography.fonts.text};
  font-style: italic;
  line-height: ${typography.lineHeight};
  padding: ${dimensions.modules.marginBottom}; 
  text-align: center;
`

const Subtitle = ({ text }) => (
  <Root>{ text }</Root>
)

Subtitle.propTypes = {
  text: React.PropTypes.string
}

export default Subtitle
