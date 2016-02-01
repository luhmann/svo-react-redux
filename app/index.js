import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore.js'

import About from './components/About.jsx'
import App from './containers/App.jsx'
import Home from './components/Home.jsx'
import RecipePage from './containers/RecipePage.jsx'

const store = configureStore()

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={ App }>
        <IndexRoute component={ Home }/>
        <Route path='about' component={ About }/>
        <Route path='recipe/:slug' component={ RecipePage }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
