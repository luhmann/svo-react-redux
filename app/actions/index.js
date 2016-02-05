import { get } from 'superagent'
import * as types from '../constants/ActionTypes.js'
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
  return { type: types.REQUEST_RECIPE }
}

function receiveRecipe (recipe) {
  return { type: types.RECEIVE_RECIPE, recipe }
}
