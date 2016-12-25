import React from 'react'
import styled from 'styled-components'
import SVGInline from 'react-svg-inline'

import logoSVG from 'assets/logo.svg'

const InlineSVG = styled(SVGInline)`
  svg {
    height: 10vw;
    width: 10vw;
  }
      
  rect {
    stroke: #fff;
  }
      
  path {
    fill: #fff;
  }
`

export default function Logo () {
  return (
    <InlineSVG svg={logoSVG} title="Stove vs. Oven" />
  )
}
