import { React } from '../../lib/commonImports.js'
import { buildImageUrl } from '../../lib/UrlBuilder.js'

import Cover from './cover/Cover.jsx'
import IngredientsList from './ingredients/IngredientsList.jsx'
import Preparation from './preparation/Preparation.jsx'
import RecipeHeader from './header/RecipeHeader.jsx'
import RecipeFooter from './RecipeFooter.jsx'

const Recipe = ({recipe}) => (
  <article>
    <Cover src={ buildImageUrl(recipe.cover.src) } width={ recipe.cover.width } height={ recipe.cover.height } />
    <RecipeHeader
      title={ recipe.title }
      subtitle={ recipe.subtitle }
      published={ recipe.published }
    />
    <IngredientsList ingredients={ recipe.ingredients } />
    <Preparation preparation={ recipe.preparation } />
    <RecipeFooter/>
  </article>
)

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
}

export default Recipe
