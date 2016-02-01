import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from '../reducers'

export default function configureStore (initialState) {
  const reduxRouterMiddleware = syncHistory(browserHistory)

  const middleware = process.env.NODE_ENV === 'production'
    ? [ thunk, reduxRouterMiddleware ]
    : [ thunk, reduxRouterMiddleware, logger() ]

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ))

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
