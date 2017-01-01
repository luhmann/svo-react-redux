import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Images from './Images.jsx'

storiesOf('Atoms', module)
  .addWithInfo(
    'Images',
    `
      An array of images to illusttrate a recipe.

      It contains a set of optimizations which load a responsive image from 
      the image scaler.
    `,
    () => {
      const img = [{
        objectId: 'lh1nmgmqugmlopswifqt.jpg',
        credits: 'Jan Florian Dietrich'
      }]

      return (
        <Images
          images={img}
        />
      )
    }
  )
