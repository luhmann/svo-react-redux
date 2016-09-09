import {React} from 'lib/commonImports.js'

import {
  Dessert,
  Description,
  Duration,
  Images,
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

import Sharing from 'sharedComponents/Sharing/Sharing.jsx'

const Recipe = ({recipe}) => (
  <article>
    <RecipeHeader title={recipe.title} category={recipe.category} cover={recipe.cover} quickinfo={recipe.quickinfo} />
    <Subtitle text={recipe.subtitle} />
    <Duration cooking={recipe.duration.cooking} cooling={recipe.duration.cooling} preparation={recipe.duration.preparation}/>
    {
      !!recipe.description &&
      <Description text={recipe.description} />
    }
    <IngredientsList servings={recipe.servings} ingredients={recipe.ingredients}/>
    <Preparation preparation={recipe.preparation}/>
    <Utensils utensils={recipe.utensils}/>
    {
      !!recipe.wine &&
      <Wine name={recipe.wine.name} description={recipe.wine.description}/>
    }
    {
      !!recipe.dessert &&
      <Dessert name={recipe.dessert.name} description={recipe.dessert.description}/>
    }
    { 
      !!recipe.calories && !!recipe.carbs && !!recipe.fat && !!recipe.protein &&
      <Nutrition cal={recipe.calories} carbs={recipe.carbs} fat={recipe.fat} protein={recipe.protein}/>
    }
    {
      !!recipe.images &&
      <Images images={recipe.images} />
    }
    <Sharing slug={recipe.slug} hash={recipe.hash} />
    <RecipeFooter/>
  </article>
)

Recipe.propTypes = {
  recipe: React.PropTypes.object.isRequired
}

export default Recipe
