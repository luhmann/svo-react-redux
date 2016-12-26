import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/variables.js'

import { ListBox, ListBoxHeader } from 'styles/shared.jsx'
import Step from './Step.jsx'

const Root = styled(ListBox)`
  background-color: ${colors.lightGray};
`

const Preparation = ({ preparation }) => (
  <Root>
    <ListBoxHeader>Zubereitung</ListBoxHeader>
    <div>
      { preparation.map((step, index) => <Step key={index} step={ step } />) }
    </div>
  </Root>
)

Preparation.propTypes = {
  preparation: React.PropTypes.array.isRequired
}

export default Preparation
