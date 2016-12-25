import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { Center } from 'styles/shared.jsx'

import Spinner from './Spinner.jsx'

storiesOf('Atoms')
  .addWithInfo(
    'Spinner on dark background',
    `
      This our standard loading spinner on a dark background
    `,
    () => (
      <Center style={{
        backgroundColor: '#3e3e3e',
        minHeight: '400px'
      }}>
        <Spinner />
      </Center>
    )
  )
  .addWithInfo(
    'Spinner on light background',
    `
      This our standard loading spinner on a light background
    `,
    () => (
      <Center style={{
        backgroundColor: '#eee',
        minHeight: '400px'
      }}>
        <Spinner />
      </Center>
    )
  )
