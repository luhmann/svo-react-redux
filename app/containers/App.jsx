import React from 'react'
import Title from '../components/Title.jsx'
import ErrorPage from './ErrorPage.jsx'

export default ({ push, children }) => {
  return (
    <div>
      <header>
        <Title text='Stove v Oven' />
      </header>
      <main>
        <ErrorPage>
          { children }
        </ErrorPage>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}
