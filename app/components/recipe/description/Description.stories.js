import React from 'react'
import { storiesOf } from '@kadira/storybook'

import Description from './Description.jsx'

storiesOf('Atoms', module)
  .addWithInfo(
    'Description',
    `
      Introductory description of the recipe.

      If none is present the whole component is not rendered
    `,
    () => {
      const text = `Saurer Rhabarber, oppulente Mandeln und sahnige Butter verleihen diesem außergewöhnlichen Kuchen seine große Klasse. Darum steht er jedes Jahr wenn es an der Zeit ist unseren Rhabarber aus dem Garten zu verbrauchen ganz oben auf unserer Liste.`

      return (
        <div>
          <Description text={text}/>
          <Description />
        </div>
      )
    }
  )
