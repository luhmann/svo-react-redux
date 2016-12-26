import SVGInline from 'react-svg-inline'
import React from 'react'
import styled from 'styled-components'
import { colors, dimensions, typography } from 'styles/variables.js'

import kcalIcon from './icons/kcal.svg'

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
    margin-right: -4px;
    width: 34px;
  }
    
  rect,
  path {
    fill: ${colors.darkGray}
  }
`

const Calories = styled.div`
  font-family: ${typography.fonts.text};
  margin-left: 7px;
  padding: 6px 0 4px;

`

const Nutrition = ({carbs, cal, fat, protein}) => (
  <Root>
    <Icon svg={kcalIcon} title="Nährwerte"/>
    <Calories>Kalorien { cal } / Eiweiß { protein }g / Kohlenhydrate { carbs }g / Fett { fat }g</Calories>
  </Root>
)

Nutrition.propTypes = {
  carbs: React.PropTypes.number,
  cal: React.PropTypes.number,
  fat: React.PropTypes.number,
  protein: React.PropTypes.number
}

export default Nutrition
