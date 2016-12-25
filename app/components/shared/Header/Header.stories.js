import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Center } from 'styles/shared.jsx'
import Header from './Header.jsx'

storiesOf('Organisms', module)
  .addWithInfo(
    'Header',
    `
      The Logo 
    `,
    () => (
      <Header />
    )
  )
