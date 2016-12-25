import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import {Header, Footer} from '../components/shared/index'
import ErrorPage from './ErrorPage.jsx'
import LoadingPage from './LoadingPage'

import styles from './App.styl'

const App = ({ children }) => {
  return (
    <div styleName='app'>
      <Header/>
      <main styleName='content'>
        <LoadingPage>
          <ErrorPage>
            {children}
          </ErrorPage>
        </LoadingPage>
      </main>
      <Footer/>
    </div>
  )
}

App.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CSSModules(App, styles, CSSModuleConfig)
