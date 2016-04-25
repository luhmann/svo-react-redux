import React from 'react'
import Title from '../components/Title.jsx'
import ErrorPage from './ErrorPage.jsx'
import LoadingPage from './LoadingPage'

export default ({ push, children }) => {
  return (
    <div>
      <header>
        <Title text='Stove v Oven' />
      </header>
      <main>
        <LoadingPage>
          <ErrorPage>
            {children}
          </ErrorPage>
        </LoadingPage>
      </main>
      <footer>
        Footer
      </footer>
    </div>
  )
}
