import React from 'react'
import styled from 'styled-components'
import { typography } from 'styles/variables.js'

import { ListBoxItem, ListBoxItemLeft, ListBoxItemRight } from 'styles/shared.jsx'

const Amount = styled(ListBoxItemLeft)`
  font-family: ${typography.fonts.text}
`

const Label = styled(ListBoxItemRight)`
  font-family: ${typography.fonts.text}
`

const mapAmount = (amount) => {
  const mappingTable = {
    0.25: '¼',
    0.75: '¾',
    0.5: '½'
  }

  return mappingTable[amount] || amount
}

const Ingredient = ({ ingredient }) => (
  <ListBoxItem>
    <Amount>
      { mapAmount(ingredient.amount) } { ingredient.unit }
    </Amount>
    <Label>
      { ingredient.label }
    </Label>
  </ListBoxItem>
)

Ingredient.propTypes = {
  ingredient: React.PropTypes.shape({
    amount: React.PropTypes.number,
    label: React.PropTypes.string.isRequired,
    unit: React.PropTypes.string
  })
}

export default Ingredient
