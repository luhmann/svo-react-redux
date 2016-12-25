import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Center } from 'styles/shared.jsx'
import Logo from './Logo.jsx'

storiesOf('Atoms', module)
  .addDecorator((story) => (
    <Center style={{ backgroundColor: '#3e3e3e', minHeight: '400px' }}>
      { story() }
    </Center>
  ))
  .addWithInfo(
    'Logo',
    `
      The Logo 
    `,
    () => (
      <Logo />
    )
  )
