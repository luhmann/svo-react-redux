import React from 'react'
import styled from 'styled-components'
import { colors, typography } from 'styles/variables.js'

import { ListBoxItem, ListBoxItemLeft, ListBoxItemRight } from 'styles/shared.jsx'

// import Ingredient from '../ingredients/Ingredient.jsx'

const Number = styled(ListBoxItemLeft)`
  border-right: none;
  color: ${colors.white};
  font-family: ${typography.fonts.numbers};
  font-size: 2.25rem;
  line-height: 1;
`

const Description = styled(ListBoxItemRight)`
  border-bottom: 1px solid ${colors.background}
`

const Step = ({ step }) => (
  <ListBoxItem key={ step.step }>
    <Number>{ step.step }</Number>
    <Description>{ step.description }</Description>
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
