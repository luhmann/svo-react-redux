import {React} from 'lib/commonImports.js'
import { If, Then } from 'react-if';

import {
  Dessert,
  Difficulty,
  Duration,
  IngredientsList,
  Nutrition,
  Quickinfo,
  Preparation,
  RecipeHeader,
  RecipeFooter,
  Utensils,
  Wine
} from './'

const Recipe = ({recipe}) => (
  <article>
    <RecipeHeader title={recipe.title} subtitle={recipe.subtitle} published={recipe.published} cover={recipe.cover}/>
    <Duration cooking={recipe.duration.cooking} cooling={recipe.duration.cooling} preparation={recipe.duration.preparation}/>
    <Difficulty difficulty={recipe.difficulty}/>
    <Nutrition cal={recipe.calories} carbs={recipe.carbs} fat={recipe.fat} protein={recipe.protein}/>
    <Quickinfo quickinfo={recipe.quickinfo}/>
    <IngredientsList servings={recipe.servings} ingredients={recipe.ingredients}/>
    <Utensils utensils={recipe.utensils}/>
    <Preparation preparation={recipe.preparation}/>
    <If condition={!!recipe.wine}>
      <Then><Wine wine={recipe.wine}/></Then>
    </If>
    <If condition={!!recipe.dessert}>
      <Then><Dessert dessert={recipe.dessert}/></Then>
    </If>
    <RecipeFooter/>
  </article>
)

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
}

export default Recipe
