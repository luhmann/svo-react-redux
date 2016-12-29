import SVGInline from 'react-svg-inline'
import React from 'react'
import styled from 'styled-components'
import { colors, dimensions, typography } from 'styles/variables.js'

import glassIcon from './icons/glass.svg'

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

const Text = styled.div`
  font-family: ${typography.fonts.text};
  margin-left: 7px;
  padding: 6px 0 4px;
`

const Name = styled.div`
  font-weight: 600;
`

const Wine = ({ name, description }) => (
  <Root>
    <Icon svg={glassIcon} title="Weinempfehlung" />
    <Text>
      <Name>{ name }</Name>
      <div>{ description }</div>
    </Text>
  </Root>
)

Wine.propTypes = {
  name: React.PropTypes.string,
  description: React.PropTypes.string
}

export default Wine
