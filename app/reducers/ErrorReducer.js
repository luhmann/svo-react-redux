import { ENTER_ERROR, LEAVE_ERROR } from '../constants/ActionTypes.js'
import { Map } from 'immutable'

const intialState = Map({
  type: null,
  details: {}
})

function error (state = intialState, action) {
  switch (action.type) {
    case ENTER_ERROR:
      return state.merge({
        type: action.error.type,
        details: action.error.details
      })
    case LEAVE_ERROR:
      return state.merge(intialState)
  }

  return state
}

export default error
