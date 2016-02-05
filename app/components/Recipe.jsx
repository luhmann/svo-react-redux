import React from 'react'

import RecipeHeader from './recipe/header/RecipeHeader.jsx'
import RecipeFooter from './recipe/RecipeFooter.jsx'

export default (props) => (
  <article>
    <RecipeHeader
      title={ props.recipe.title }
      subtitle={ props.recipe.subtitle }
      published={ props.recipe.published }
    />
    <RecipeFooter/>
  </article>
)
