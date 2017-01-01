import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Utensils from './Utensils.jsx'

storiesOf('Molecules', module)
  .addWithInfo(
    'Utensils',
    `
      A list of all untensils needed to prepare the meal
    `,
    () => {
      const utensils = [
        'Kochlöffel',
        'großer Topf',
        'Küchenmesser',
        'kleine Schale',
        'Litermaß'
      ]

      return (
        <Utensils
          utensils={utensils}
        />
      )
    }
  )
