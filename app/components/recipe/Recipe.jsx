import renderIf from 'render-if'
import {React} from 'lib/commonImports.js'

import {
  Dessert,
  Description,
  Duration,
  Images,
  IngredientsList,
  Nutrition,
  Preparation,
  RecipeHeader,
  RecipeFooter,
  Subtitle,
  Utensils,
  Wine
} from './'

import Sharing from 'sharedComponents/Sharing/Sharing.jsx'

const Recipe = ({recipe}) => (
  <article>
    <RecipeHeader title={recipe.title} category={recipe.category} cover={recipe.cover} quickinfo={recipe.quickinfo} />
    <Subtitle text={recipe.subtitle} />
    <Duration cooking={recipe.duration.cooking} cooling={recipe.duration.cooling} preparation={recipe.duration.preparation}/>
    {
      renderIf(!!recipe.description)(() => (
        <Description text={recipe.description} />
      ))
    }
    <IngredientsList servings={recipe.servings} ingredients={recipe.ingredients}/>
    <Preparation preparation={recipe.preparation}/>
    <Utensils utensils={recipe.utensils}/>
    {
      renderIf(!!recipe.wine)(() => (
        <Wine name={recipe.wine.name} description={recipe.wine.description}/>
      ))
    }
    {
      renderIf(!!recipe.dessert)(() => (
        <Dessert name={recipe.dessert.name} description={recipe.dessert.description}/>
      ))
    }
    {
      renderIf(!!recipe.calories && !!recipe.carbs && !!recipe.fat && !!recipe.protein)(() => (
        <Nutrition cal={recipe.calories} carbs={recipe.carbs} fat={recipe.fat} protein={recipe.protein}/>
      ))
    }
    {
      renderIf(!!recipe.images)(() => (
        <Images images={recipe.images} />
      ))
    }
    <Sharing slug={recipe.slug} isClipboardSupported={document.queryCommandSupported('copy')} />
    <RecipeFooter/>
  </article>
)

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
}

export default Recipe
