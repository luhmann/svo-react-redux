import { combineReducers } from 'redux-immutable'
import route from './RouteReducer.js'
import recipe from './RecipeReducer.js'

const rootReducer = combineReducers({
  recipe,
  route
})

export default rootReducer
