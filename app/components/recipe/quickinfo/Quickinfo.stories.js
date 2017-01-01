import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Center } from 'styles/shared.jsx'
import Quickinfo from './Quickinfo.jsx'

storiesOf('Molecules', module)
  .addDecorator((story) => (
    <Center style={{ backgroundColor: '#3e3e3e', minHeight: '400px' }}>
      { story() }
    </Center>
  ))
  .addWithInfo(
    'Quickinfo',
    `
      A set of icons to illustrate several properties of a recipe
    `,
    () => {
      const quickinfo = {
        skinny: true,
        quick: false,
        restTime: true,
        vegetarian: false
      }

      return (
        <Quickinfo
          quickinfo={quickinfo}
        />
      )
    }
  )
