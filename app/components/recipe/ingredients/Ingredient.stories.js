import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Ingredient from './Ingredient.jsx'

storiesOf('Molecules', module)
  .addWithInfo(
    'Ingredient',
    `
      A single Ingredient

      Quantities of 0.25, 0.5, 0.75 are mapped to a fraction char. 
    `,
    () => {
      const ingredient = {
        amount: 200,
        unit: 'g',
        label: 'Hackfleisch'
      }

      const ingredientFraction = {
        amount: 0.5,
        unit: null,
        label: 'Knoblauchzehe'
      }

      return (
        <div>
          <Ingredient
            ingredient={ingredient}
          />
          <Ingredient
            ingredient={ingredientFraction}
          />
        </div>
      )
    }
  )
