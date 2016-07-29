import {React} from 'lib/commonImports.js'
import { If, Then } from 'react-if';

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
    <Cover img={recipe.cover}/>
    <RecipeHeader title={recipe.title} subtitle={recipe.subtitle} published={recipe.published}/>
    <Duration cooking={recipe.duration.cooking} cooling={recipe.duration.cooling} preparation={recipe.duration.preparation}/>
    <Difficulty difficulty={recipe.difficulty}/>
    <Nutrition cal={recipe.calories} carbs={recipe.carbs} fat={recipe.fat} protein={recipe.protein}/>
    <Quickinfo quickinfo={recipe.quickinfo}/>
    <IngredientsList servings={recipe.servings} ingredients={recipe.ingredients}/>
    <Utensils utensils={recipe.utensils}/>
    <Preparation preparation={recipe.preparation}/>
    <If condition={recipe.wine}>
      <Then><Wine wine={recipe.wine}/></Then>
    </If>
    <If condition={recipe.dessert}>
      <Then><Dessert dessert={recipe.dessert}/></Then>
    </If>
    <RecipeFooter/>
  </article>
)

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
}

export default Recipe
