import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Center } from 'styles/shared.jsx'
import Gauge from './Gauge.jsx'

storiesOf('Atoms', module)
  .addDecorator((story) => (
    <Center style={{ backgroundColor: '#f1f1f1', minHeight: '400px' }}>
      { story() }
    </Center>
  ))
  .addWithInfo(
    'Gauge',
    `
      A circular interface element that is supoosed to show
      how much of an hour a preparation step takes.

      It is currently limited too displaying parts of one full hour.
    `,
    () => (
      <div>
        <Gauge
          filledPercent={ 0.25 }
          title="Vorbereitung"
          label="15min" />
      </div>
    )
  )
