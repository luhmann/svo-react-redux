import React from 'react'
import styled from 'styled-components'
import { typography, dimensions } from 'styles/variables'

const Root = styled.footer`
  font-family: ${typography.fonts.text}
  margin-bottom: ${dimensions.modules.marginBottom}
  padding: 0 ${dimensions.modules.vPadding}
`

const RecipeFooter = (props) => (
  <Root>
    Rezept drucken
  </Root>
)

export default RecipeFooter
