import { REQUEST_RECIPE, RECEIVE_RECIPE } from '../constants/ActionTypes.js'
import { Record } from 'immutable'

const intialState = new Record({
  fetching: false,
  current: null
})()

function recipe (state = intialState, action) {
  switch (action.type) {
    case REQUEST_RECIPE:
      return state.set('fetching', true)
    case RECEIVE_RECIPE:
      return new Record({
        fetching: false,
        current: action.recipe
      })()
  }

  return state
}

export default recipe
