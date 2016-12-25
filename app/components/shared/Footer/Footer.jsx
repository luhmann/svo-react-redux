import React from 'react'
import styled from 'styled-components'
import {dimensions, typography} from 'styles/variables.js'


const Root = styled.footer`
  font-family: ${typography.fonts.text}   
  height: ${dimensions.footerHeight}
  padding 0 ${dimensions.modules.vPadding}
`

const Footer = () => (
  <Root>
    &copy; 2016 Stove vs. Oven
  </Root>
)

export default Footer
