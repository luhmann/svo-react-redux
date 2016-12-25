import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Footer from './Footer.jsx'

storiesOf('Organisms', module)
  .addWithInfo(
    'Footer',
    `
      The standard footer
    `,
    () => (
      <Footer />
    )
  )
