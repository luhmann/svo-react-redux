import { get } from 'superagent'
import { REQUEST_RECIPE, RECEIVE_RECIPE } from '../constants/ActionTypes.js'
import { buildRecipeUrl } from '../lib/UrlBuilder.js'

export function fetchRecipe (slug) {
  return dispatch => {
    dispatch(requestRecipe())

    get(buildRecipeUrl(slug))
      .type('application/json')
      .accept('application/json')
      .end((err, res) => {
        try {
          dispatch(receiveRecipe(res.body.recipe))
        } catch (e) {
          // TODO: Implement redux conform error handling
          console.log('GET recipe failed', err)
        }
      })
  }
}

function requestRecipe () {
  return { type: REQUEST_RECIPE }
}

function receiveRecipe (recipe) {
  return { type: RECEIVE_RECIPE, recipe }
}
