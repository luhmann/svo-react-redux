import { combineReducers } from 'redux-immutable'

import error from './ErrorReducer.js'
import recipe from './RecipeReducer.js'
import route from './RouteReducer.js'
import auth from './AuthReducer.js'

const rootReducer = combineReducers({
  error,
  loading: auth,
  recipe,
  route
})

export default rootReducer
