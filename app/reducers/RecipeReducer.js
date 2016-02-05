import { REQUEST_RECIPE, RECEIVE_RECIPE } from '../constants/ActionTypes.js'
import Immutable from 'seamless-immutable'

const intialState = Immutable({
  fetching: false,
  current: null
})

function recipe (state = intialState, action) {
  switch (action.type) {
    case REQUEST_RECIPE:
      return state.set('fetching', true)
    case RECEIVE_RECIPE:
      return Immutable({
        fetching: false,
        current: action.recipe
      })
  }

  return state
}

export default recipe
