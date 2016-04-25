import { REQUEST_AUTH_TOKEN, RECEIVE_AUTH_TOKEN } from '../constants/ActionTypes.js'
import { Map } from 'immutable'

const intialState = Map({
  fetching: false,
  token: null
})

function auth (state = intialState, action) {
  switch (action.type) {
    case REQUEST_AUTH_TOKEN:
      return state.merge({
        fetching: true
      })
    case RECEIVE_AUTH_TOKEN:
      return state.merge({
        fetching: false,
        token: action.token
      })
  }

  return state
}

export default auth
