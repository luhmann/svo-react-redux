import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/index'
import Recipe from '../components/Recipe.jsx'

class RecipePage extends React.Component {
  constructor (props) {
    super(props)
    this.props.dispatch(fetchRecipe(this.props.params.slug))
  }

  render () {
    return (<Recipe data={this.props.recipe.current} />)
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
