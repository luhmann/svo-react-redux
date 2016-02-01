import React from 'react'

import RecipeHeader from './recipe/RecipeHeader.jsx'
import RecipeFooter from './recipe/RecipeFooter.jsx'

export default (props) => (
  <article>
    <RecipeHeader
      title={ props.data.title }
      subtitle={ props.data.subtitle }
      published={ props.data.published }
    />
    <RecipeFooter/>
  </article>
)
