import SVGInline from 'react-svg-inline'
import React from 'react'
import styled from 'styled-components'
import { colors, dimensions, typography } from 'styles/variables.js'

import potIcon from './icons/pot.svg'

const Root = styled.section`
  display: flex;
  margin: 0 ${dimensions.modules.vPadding};
  padding: 10px 16px;
`

const Icon = styled(SVGInline)`
  min-width: 54px;
  padding: 4px 6px 0; 
  text-align: right;
  
  svg {
    fill: ${colors.darkGray};
    margin-right: -4px;
    width: 36px; 
  }
`

const Items = styled.div`
  font-family: ${typography.fonts.text};
  margin-left: 7px;
  padding: 6px 0 4px;
`

const Utensils = ({utensils}) => (
  <Root>
    <Icon svg={potIcon} title="Küchengeräte" />
    <Items>{ utensils.join(', ') }</Items>
  </Root>
)

Utensils.propTypes = {
  utensils: React.PropTypes.array
}

export default Utensils
