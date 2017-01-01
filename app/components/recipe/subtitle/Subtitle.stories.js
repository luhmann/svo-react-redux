import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Subtitle from './Subtitle.jsx'

storiesOf('Atoms', module)
  .addWithInfo(
    'Subtitle',
    `
      Subtitle for a recipe
    `,
    () => {
      return (
        <Subtitle 
          text="Ein einfacher, fluffiger und saftiger Kuchen für die Rhabarber-Zeit"
        />
      )
    }
  )
