import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Dessert from './Dessert.jsx'

storiesOf('Molecules', module)
  .addDecorator((story) => (
    <div style={{ backgroundColor: '#f1f1f1', minHeight: '400px' }}>
      { story() }
    </div>
  ))
  .addWithInfo(
    'Dessert',
    `
      An optional dessert recommendation for a recipe.
    `,
    () => (
      <Dessert
        name="Vanilleeis mit heißen Himbeeren"
        description="Dieser göttliche Klassiker der Dessertkultur bezaubert bis heute jung und alt."
        />
    )
  )
