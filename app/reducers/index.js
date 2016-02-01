import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import { REQUEST_RECIPE, RECEIVE_RECIPE } from '../constants/ActionTypes.js'

const intialStateRecipe = {
  fetching: false,
  currentRecipe: {}
}

function recipe (state = intialStateRecipe, action) {
  switch (action.type) {
    case REQUEST_RECIPE:
      return Object.assign({}, state, {
        fetching: true
      })
    case RECEIVE_RECIPE:
      return Object.assign({}, state, {
        fetching: false,
        currentRecipe: action.recipe
      })
  }

  return state
}

const rootReducer = combineReducers({
  recipe,
  routeReducer
})

export default rootReducer
