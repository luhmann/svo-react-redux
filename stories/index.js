import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Sharing from '@components/shared/Sharing/Sharing.jsx'

storiesOf('Sharing', module)
  .add('standard', () => (
    <Sharing slug="/foo/bar" hash="a65343" />
  ))
