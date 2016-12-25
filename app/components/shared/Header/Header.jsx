import React from 'react'
import styled from 'styled-components'
import { dimensions, layers } from 'styles/variables.js'

import { Logo } from 'sharedComponents/'

const Root = styled.header`
  align-items: center;
  background: linear-gradient(#333, transparent);
  display: flex;
  height: ${dimensions.headerHeight};
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: ${layers.standard};
`

const Header = () => (
  <Root>
    <Logo />
  </Root>
)

export default Header
