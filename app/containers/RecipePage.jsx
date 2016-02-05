import React from 'react'
import { connect } from 'react-redux'

import { fetchRecipe } from '../actions/index'

import Loading from '../components/loading/Loading.jsx'
import Recipe from '../components/Recipe.jsx'

class RecipePage extends React.Component {
  constructor (props) {
    super(props)
    this.props.dispatch(fetchRecipe(this.props.params.slug))
  }

  render () {
    if (this.props.recipe.fetching) {
      return (<Loading />)
    } else if (this.props.recipe.current) {
      return (<Recipe recipe={this.props.recipe.current} />)
    } else {
      return <div>Kapott</div>
    }
  }
}

RecipePage.propTypes = {
  dispatch: React.PropTypes.func,
  recipe: React.PropTypes.object,
  params: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return { recipe: state.recipe }
}

export default connect(mapStateToProps)(RecipePage)
