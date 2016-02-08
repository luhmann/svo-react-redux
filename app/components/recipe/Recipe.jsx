import { React } from '../../lib/commonImports.js'
import { buildImageUrl } from '../../lib/UrlBuilder.js'

import Cover from './cover/Cover.jsx'
import Duration from './duration/Duration.jsx'
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
    <Duration
      cooking={ recipe.duration.cooking }
      cooling={ recipe.duration.cooling }
      preparation={ recipe.duration.preparation }
    />
    <IngredientsList servings={ recipe.servings } ingredients={ recipe.ingredients } />
    <Preparation preparation={ recipe.preparation } />
    <RecipeFooter/>
  </article>
)

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
}

export default Recipe
