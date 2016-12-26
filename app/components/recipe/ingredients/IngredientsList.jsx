import React from 'react'

import { ListBox, ListBoxHeader } from 'styles/shared.jsx'
import Ingredient from './Ingredient.jsx'

const IngredientsList = ({ ingredients, servings }) => (
  <ListBox>
    <ListBoxHeader>
      Zutaten für {servings} { (servings === 1) ? 'Portion' : 'Portionen' }
    </ListBoxHeader>
    <div>
        { ingredients.map((ingredient, index) => <Ingredient key={index} ingredient={ ingredient } />) }
    </div>
  </ListBox>
)

IngredientsList.propTypes = {
  ingredients: React.PropTypes.array.isRequired,
  servings: React.PropTypes.number.isRequired
}

export default IngredientsList
