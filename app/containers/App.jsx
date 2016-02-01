import React from 'react'
import Title from '../components/Title.jsx'
import { connect } from 'react-redux'
import { routeActions } from 'react-router-redux'

function App ({ push, children }) {
  return (
    <div>
      <header>
        <Title text='Stove v Oven' />
      </header>
      <div>{children}</div>
      <footer>
        Footer
      </footer>
    </div>
  )
}

export default connect(
  null,
  routeActions
)(App)
