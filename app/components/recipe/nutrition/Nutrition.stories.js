import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Nutrition from './Nutrition.jsx'

storiesOf('Molecules', module)
  .addWithInfo(
    'Nutrition',
    `
      Nutritional infos for recipe
    `,
    () => {
      return (
        <Nutrition
          carbs={20}
          cal={500}
          fat={10}
          protein={15}
        />
      )
    }
  )
