import { React } from '../../lib/commonImports.js'
import { buildImageUrl } from '../../lib/UrlBuilder.js'

import Cover from './cover/Cover.jsx'
import Dessert from './dessert/Dessert.jsx'
import Difficulty from './difficulty/Difficulty.jsx'
import Duration from './duration/Duration.jsx'
import IngredientsList from './ingredients/IngredientsList.jsx'
import Nutrition from './nutrition/Nutrition.jsx'
import Quickinfo from './quickinfo/Quickinfo.jsx'
import Preparation from './preparation/Preparation.jsx'
import RecipeHeader from './header/RecipeHeader.jsx'
import RecipeFooter from './RecipeFooter.jsx'
import Utensils from './Utensils/Utensils.jsx'
import Wine from './Wine/Wine.jsx'

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
    <Difficulty difficulty={ recipe.difficulty } />
    <Nutrition
      cal={ recipe.calories }
      carbs={ recipe.carbs }
      fat={ recipe.fat }
      protein={ recipe.protein }
    />
    <Quickinfo quickinfo={ recipe.quickinfo } />
    <IngredientsList servings={ recipe.servings } ingredients={ recipe.ingredients } />
    <Utensils utensils={recipe.utensils} />
    <Preparation preparation={ recipe.preparation } />
    <Wine wine={ recipe.wine } />
    <Dessert dessert={ recipe.dessert } />
    <RecipeFooter/>
  </article>
)

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
}

export default Recipe
