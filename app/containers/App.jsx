import React from 'react'
import styled from 'styled-components'

import { dimensions, colors } from 'styles/variables.js'
import { Header, Footer } from 'sharedComponents/'
import ErrorPage from './ErrorPage.jsx'
import LoadingPage from './LoadingPage'

// inject styles which are global in scope
import 'styles/global.js'

const AppWrapper = styled.div`
  background-color: ${colors.background};
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 414px;
  min-height: 100vh;
  overflow: hidden;
`

const Main = styled.main`
  min-height: calc(100vh - ${dimensions.footerHeight});
  margin-top: -${dimensions.headerHeight};
`

const App = ({ children }) => {
  return (
    <AppWrapper>
      <Header/>
      <Main>
        <LoadingPage>
          <ErrorPage>
            {children}
          </ErrorPage>
        </LoadingPage>
      </Main>
      <Footer/>
    </AppWrapper>
  )
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default App
