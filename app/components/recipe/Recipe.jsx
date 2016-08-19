import {React} from 'lib/commonImports.js'
import { If, Then } from 'react-if';

import {
  Dessert,
  Description,
  Duration,
  IngredientsList,
  Nutrition,
  Quickinfo,
  Preparation,
  RecipeHeader,
  RecipeFooter,
  Subtitle,
  Utensils,
  Wine
} from './'

const Recipe = ({recipe}) => (
  <article>
    <RecipeHeader title={recipe.title} category={recipe.category} cover={recipe.cover} quickinfo={recipe.quickinfo} />
    <Subtitle text={recipe.subtitle} />
    <Duration cooking={recipe.duration.cooking} cooling={recipe.duration.cooling} preparation={recipe.duration.preparation}/>
    <If condition={!!recipe.calories && !!recipe.carbs && !!recipe.fat && !!recipe.protein}>
      <Nutrition cal={recipe.calories} carbs={recipe.carbs} fat={recipe.fat} protein={recipe.protein}/>
    </If>
    <Description text={recipe.description} />
    <IngredientsList servings={recipe.servings} ingredients={recipe.ingredients}/>
    <Preparation preparation={recipe.preparation}/>
    <Utensils utensils={recipe.utensils}/>
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
