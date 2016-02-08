import { combineReducers } from 'redux-immutable'

import error from './ErrorReducer.js'
import recipe from './RecipeReducer.js'
import route from './RouteReducer.js'

const rootReducer = combineReducers({
  error,
  recipe,
  route
})

export default rootReducer
