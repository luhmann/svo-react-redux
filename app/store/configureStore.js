import Immutable from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from '../reducers'

export default function configureStore (initialState = Immutable.Map({})) {
  // sync react-router and redux
  // const reduxRouterMiddleware = syncHistory(browserHistory)

  // apply different middleware in dev and production
  const middleware = process.env.NODE_ENV === 'production'
    ? [ thunk ]
    : [ thunk, logger({ duration: true, stateTransformer: (state) => state.toJS() }) ]

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    // support for reduxDevTools chrome plugin => using redux-developer-tools is an option without chrome plugin
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
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
