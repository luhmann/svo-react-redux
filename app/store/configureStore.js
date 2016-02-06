import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { syncHistory } from 'react-router-redux'
import { browserHistory } from 'react-router'
import rootReducer from '../reducers'

export default function configureStore (initialState) {
  // sync react-router and redux
  const reduxRouterMiddleware = syncHistory(browserHistory)

  // apply different middleware in dev and production
  const middleware = process.env.NODE_ENV === 'production'
    ? [ thunk, reduxRouterMiddleware ]
    : [ thunk, reduxRouterMiddleware, logger({ duration: true }) ]

  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middleware),
    // support for reduxDevTools chrome plugin => using redux-developer-tools is an option without chrome plugin
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
