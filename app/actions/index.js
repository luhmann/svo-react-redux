import { get } from 'superagent'
import { REQUEST_RECIPE, RECEIVE_RECIPE, ENTER_ERROR } from '../constants/ActionTypes.js'
import { CONNECTION_ERROR } from '../constants/ErrorTypes.js'
import { buildRecipeUrl } from '../lib/UrlBuilder.js'

export function fetchRecipe (slug) {
  return dispatch => {
    dispatch(requestRecipe())

    get(buildRecipeUrl(slug))
      .type('application/json')
      .accept('application/json')
      .end((err, res) => {
        if (err) {
          dispatch(emitError({
            type: CONNECTION_ERROR,
            details: err
          }))
          return
        }

        try {
          dispatch(receiveRecipe(res.body))
        } catch (e) {
          console.log('GET recipe failed', e)
          dispatch(emitError({
            type: CONNECTION_ERROR,
            details: e
          }))
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

function emitError (error) {
  return { type: ENTER_ERROR, error }
}
