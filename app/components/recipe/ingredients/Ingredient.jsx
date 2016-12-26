import React from 'react'

import { ListBoxItem, ListBoxItemLeft, ListBoxItemRight } from 'styles/shared.jsx'

const mapAmount = (amount) => {
  const mappingTable = {
    '0.25': '¼',
    '0.75': '¾',
    '0.5': '½'
  }

  return mappingTable[amount] || amount
}

const Ingredient = ({ ingredient }) => (
  <ListBoxItem>
    <ListBoxItemLeft>
      { mapAmount(ingredient.amount) } { ingredient.unit }
    </ListBoxItemLeft>
    <ListBoxItemRight>
      { ingredient.label }
    </ListBoxItemRight>
  </ListBoxItem>
)

Ingredient.propTypes = {
  ingredient: React.PropTypes.object.isRequired
}

export default Ingredient
