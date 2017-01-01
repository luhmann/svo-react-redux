import React from 'react'
import { storiesOf } from '@kadira/storybook'

import RecipeHeader from './RecipeHeader.jsx'

storiesOf('Molecules', module)
  .addDecorator((story) => (
    <div style={{ backgroundColor: '#f1f1f1', minHeight: '400px' }}>
      { story() }
    </div>
  ))
  .addWithInfo(
    'RecipeHeader',
    `
      The header of a recipe in detail view
    `,
    () => {
      const img = {
        objectId: 'lh1nmgmqugmlopswifqt.jpg',
        credits: 'Jan Florian Dietrich'
      }

      const quickinfo = {
        skinny: true,
        quick: false,
        restTime: true,
        vegetarian: false
      }

      return (
        <RecipeHeader
          cover={img}
          title="Ungarischer Wildgulasch"
          category="dinner"
          quickinfo={quickinfo}
        />
      )
    }
  )
