import { REQUEST_RECIPE, RECEIVE_RECIPE } from '../constants/ActionTypes.js'

const intialState = {
  fetching: false,
  current: {}
}

function recipe (state = intialState, action) {
  switch (action.type) {
    case REQUEST_RECIPE:
      return Object.assign({}, state, {
        fetching: true
      })
    case RECEIVE_RECIPE:
      return Object.assign({}, state, {
        fetching: false,
        current: action.recipe
      })
  }

  return state
}

export default recipe
