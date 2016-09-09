import fetch from 'isomorphic-fetch'
import { REQUEST_RECIPE, RECEIVE_RECIPE } from '../constants/ActionTypes.js'
import { buildRecipeApiUrl } from '../lib/UrlBuilder.js'
import config from '../config/env'
import { handleErrors, mapErrors } from '../lib/handle-fetch-errors/'

export function fetchRecipe (slug) {
  return (dispatch, getState) => {
    dispatch(requestRecipe())

    fetch(buildRecipeApiUrl(slug), {
      headers: {
        [config.api.auth.header]: getState().getIn(['loading', 'token'])
      }
    })
      .then(handleErrors)
      .then((response) => response.json())
      .then((json) => {
        dispatch(receiveRecipe(json))
      })
      .catch((e) => {
        dispatch(mapErrors(e))
      })
  }
}

function requestRecipe () {
  return { type: REQUEST_RECIPE }
}

function receiveRecipe (recipe) {
  return { type: RECEIVE_RECIPE, recipe }
}
