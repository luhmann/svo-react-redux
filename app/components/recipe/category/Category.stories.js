import React from 'react'
import { storiesOf } from '@kadira/storybook'

import { Center } from 'styles/shared.jsx'
import Category from './Category.jsx'

storiesOf('Atoms', module)
  .addDecorator((story) => (
    <Center style={{ backgroundColor: '#3e3e3e', minHeight: '400px' }}>
      { story() }
    </Center>
  ))
  .addWithInfo(
    'Category',
    `
      The category of the dish that is to be prepared.

      The categories shown below are the ones available.

      If an unknown type is passed nothing is displayed as demonstrated below with type "foo"
    `,
    () => (
      <div>
        <Category type="breakfast" />
        <Category type="lunch" />
        <Category type="dinner" />
        <Category type="dessert" />
        <Category type="snack" />
        <Category type="foo" />
      </div>
    )
  )
