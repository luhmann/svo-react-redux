import React from 'react'
import { connect } from 'react-redux'
import ErrorDataTransformer from '../lib/ErrorDataTransformer.js'
import ErrorMessageMapper from '../lib/ErrorMessageMapper.js'

import Error from '../components/Error/Error.jsx'

class ErrorPage extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  render () {
    if (this.props.error.type) {
      return (<Error message={ErrorMessageMapper(this.props.error)} />)
    } else {
      return (<div>{this.props.children}</div>)
    }
  }
}

ErrorPage.propTypes = {
  dispatch: React.PropTypes.func,
  error: React.PropTypes.object,
  children: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    error: ErrorDataTransformer(state)
  }
}

export default connect(mapStateToProps)(ErrorPage)
