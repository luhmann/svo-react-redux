import { React } from '../../lib/commonImports.js'
import { buildImageUrl } from '../../lib/UrlBuilder.js'

import Cover from './cover/Cover.jsx'
import RecipeHeader from './header/RecipeHeader.jsx'
import RecipeFooter from './RecipeFooter.jsx'

const Recipe = (props) => (
  <article>
    <Cover src={ buildImageUrl(props.recipe.cover.src) } width={ props.recipe.cover.width } height={ props.recipe.cover.height } />
    <RecipeHeader
      title={ props.recipe.title }
      subtitle={ props.recipe.subtitle }
      published={ props.recipe.published }
    />
    <RecipeFooter/>
  </article>
)

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
}

export default Recipe
