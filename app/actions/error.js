import { ENTER_ERROR } from '../constants/ActionTypes.js'

export function emitError (error) {
  return { type: ENTER_ERROR, error }
}
