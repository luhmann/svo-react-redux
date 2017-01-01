import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Wine from './Wine.jsx'

storiesOf('Molecules', module)
  .addWithInfo(
    'Wine',
    `
      A wine recommendation for the current recipe
    `,
    () => {
      return (
        <Wine
          title="Malborough Sound Sauvignon Blanc"
          description="Ein sehr süffiger und fruchtiger Weißer zum Träumen und Genießen"
        />
      )
    }
  )
