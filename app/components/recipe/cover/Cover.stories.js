import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Cover from './Cover.jsx'

storiesOf('Molecules', module)
  .addWithInfo(
    'Cover',
    `
      The main teaser image for a recipe.

      It fills its complete container, while being a responsive image loading the 
      optimal version.
    `,
    () => {
      const img = {
        objectId: 'lh1nmgmqugmlopswifqt',
        credits: 'Jan Florian Dietrich'
      }

      return (
        <Cover img={img}/>
      )
    }
  )
