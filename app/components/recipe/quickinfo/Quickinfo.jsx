import SVGInline from 'react-svg-inline'
import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/variables.js'
import tinycolor from 'tinycolor2'

import skinnyIcon from './icons/skinny.svg'
import quickIcon from './icons/quick.svg'
import restTimeIcon from './icons/rest_time.svg'
import vegetarianIcon from './icons/vegetarian.svg'

const Root = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 1rem auto 0;
  width: 36vw;
`

const Icon = styled(SVGInline)`
  svg {
    height: 20px; 
    width: 20px;

    path,
    rect,
    polygon {
      fill: ${props => props.isActive ? colors.white : tinycolor(colors.white).darken(50).toString()};
      stroke: ${props => props.isActive ? colors.white : tinycolor(colors.white).darken(50).toString()};
    } 
  }
`

const Quickinfo = ({ quickinfo }) => (
  <Root>
    <Icon isActive={ quickinfo.skinny } svg={skinnyIcon} cleanup={true} classSuffix='' title='kalorienarm' />
    <Icon isActive={ quickinfo.vegetarian } svg={vegetarianIcon} cleanup={true} classSuffix='' title='vegetarisch' />
    <Icon isActive={ quickinfo.quick } svg={quickIcon} cleanup={true} cleanupExceptions={['width', 'height']} classSuffix='' title='schnell' />
    <Icon isActive={ quickinfo.restTime } svg={restTimeIcon} cleanup={true} cleanupExceptions={['width', 'height']} classSuffix='' title='zeitaufwendig' />
  </Root>
)

Quickinfo.propTypes = {
  quickinfo: React.PropTypes.object.isRequired
}

export default Quickinfo
