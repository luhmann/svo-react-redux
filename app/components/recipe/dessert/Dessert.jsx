import SVGInline from 'react-svg-inline'
import React from 'react'
import styled from 'styled-components'
import { colors, dimensions, typography } from 'styles/variables.js'

import cupcakeIcon from './icons/cupcake.svg'

const Root = styled.section`
  display: flex;
  margin: 0 ${dimensions.modules.vPadding}
`

const Icon = styled(SVGInline)`
  min-width: 54px;
  padding: 4px 6px 0; 
  text-align: right;

  svg {
    fill: ${colors.darkGray};
    width: 22px;
  }
`

const Text = styled.div`
  font-family: ${typography.fonts.text};
  margin-left: 7px;
  padding: 6px 0 4px;
`

const Name = styled.div`
  font-weight: 600;
`

const Dessert = ({ name, description }) => (
  <Root>
    <Icon svg={cupcakeIcon} title="Zum Dessert" />
    <Text>
      <Name>{ name }</Name>
      <div>{ description }</div>
    </Text>
  </Root>
)

Dessert.propTypes = {
  name: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired
}

export default Dessert
