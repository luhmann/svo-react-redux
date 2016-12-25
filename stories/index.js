import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Sharing from '@components/shared/Sharing/Sharing.jsx'

storiesOf('Sharing', module)
  .addWithInfo(
    'clipboard supported',
    `
      This is our approach to sharing the url of this recipe wherever the user wants. We use this
      instead of including the usual social media widgets as these are cumbersome to update and
      invade on the users privacy.

      We try to explain this to the best of our ability within the component.

      This is the view of the component if the browser supports clipboard actions.
    `,
    () => (
      <Sharing slug="hungarian-goulash" isClipboardSupported="true" />
    )
  )
  .addWithInfo(
    'clipboard not supported',
    `
      This is the view of the component if the browser does not support clipboard actions.
    `,
    () => (
      <Sharing slug="hungarian-goulash" />
    )
  )
