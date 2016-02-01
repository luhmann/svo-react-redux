import React from 'react'
import Title from '../components/Title.jsx'

export default ({ push, children }) => {
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
