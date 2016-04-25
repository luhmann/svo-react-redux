import React from 'react'
import { connect } from 'react-redux'
import LoadingDataTransformer from '../lib/LoadingDataTransformer'
import { fetchToken } from '../actions/auth.js'

import Loading from '../components/loading/Loading.jsx'

class LoadingPage extends React.Component {
  constructor (props) {
    super(props)
    props.dispatch(fetchToken())
  }

  render () {
    if (!this.props.loading.token) {
      return (<Loading />)
    } else {
      return (<div>{this.props.children}</div>)
    }
  }
}

LoadingPage.propTypes = {
  dispatch: React.PropTypes.func,
  loading: React.PropTypes.object,
  children: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return {
    loading: LoadingDataTransformer(state)
  }
}

export default connect(mapStateToProps)(LoadingPage)
