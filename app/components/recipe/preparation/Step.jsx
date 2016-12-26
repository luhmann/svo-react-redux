import React from 'react'
import styled from 'styled-components'
import { colors } from 'styles/variables.js'

import { ListBoxItem, ListBoxItemLeft, ListBoxItemRight } from 'styles/shared.jsx'

// import Ingredient from '../ingredients/Ingredient.jsx'

const Number = styled(ListBoxItemLeft)`
  border-right: none;
  color: ${colors.white};
  font-family: 'Telefon Black';
  font-size: 2.25rem;
  line-height: 1;
`

const Step = ({ step }) => (
  <ListBoxItem key={ step.step }>
    <Number>{ step.step }</Number>
    <ListBoxItemRight>{ step.description }</ListBoxItemRight>
    {
      /*
      step.ingredients
        ? (<div>{ step.ingredients.map((ingredient, index) =>
            (<Ingredient key ={index} ingredient={ingredient} />))}</div>)
        : '' */
    }

   {
      /* step.utensils
         ? <div>{ step.utensils.join(', ') }</div>
        : '' */
    }
  </ListBoxItem>
)

Step.propTypes = {
  step: React.PropTypes.object.isRequired
}

export default Step
