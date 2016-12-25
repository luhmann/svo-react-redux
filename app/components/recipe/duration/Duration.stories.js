import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Duration from './Duration.jsx'

storiesOf('Molecules', module)
  .addDecorator((story) => (
    <div style={{ backgroundColor: '#f1f1f1', minHeight: '400px' }}>
      { story() }
    </div>
  ))
  .addWithInfo(
    'Duration',
    `
      A short overview of the duration of different cooking steps.
    `,
    () => (
      <Duration preparation={3600} cooking={1600} cooling={0}/>
    )
  )
