import { combineReducers } from 'redux'
import { routeReducer } from 'react-router-redux'
import recipe from './RecipeReducer.js'

const rootReducer = combineReducers({
  recipe,
  routeReducer
})

export default rootReducer
