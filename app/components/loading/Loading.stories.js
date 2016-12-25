import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Center } from 'styles/shared.jsx'

import Loading from './Loading.jsx'

storiesOf('Organisms')
  .addWithInfo(
    'Loading Screen',
    `
     A spinner with some Text on a variation of images 
    `,
    () => (
     <Loading />
    )
  )

