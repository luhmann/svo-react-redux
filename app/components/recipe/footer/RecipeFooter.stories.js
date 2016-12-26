import React from 'react'
import { storiesOf } from '@kadira/storybook'

import RecipeFooter from './RecipeFooter.jsx'

storiesOf('Molecules', module)
  .addDecorator((story) => (
    <div style={{ backgroundColor: '#f1f1f1', minHeight: '400px' }}>
      { story() }
    </div>
  ))
  .addWithInfo(
    'RecipeFooter',
    `
      The footer of a recipe in detail view
    `,
    () => (
      <RecipeFooter />
    )
  )
