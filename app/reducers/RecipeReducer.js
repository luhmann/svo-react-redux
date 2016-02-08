import { REQUEST_RECIPE, RECEIVE_RECIPE } from '../constants/ActionTypes.js'
import { Map } from 'immutable'

const intialState = Map({
  fetching: false,
  current: null
})

function recipe (state = intialState, action) {
  switch (action.type) {
    case REQUEST_RECIPE:
      return state.set('fetching', true)
    case RECEIVE_RECIPE:
      return state.merge({
        fetching: false,
        current: action.recipe
      })
  }

  return state
}

export default recipe
