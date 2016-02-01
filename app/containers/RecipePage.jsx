import React from 'react'
import { connect } from 'react-redux'
import { fetchRecipe } from '../actions/index'
import Title from '../components/Title.jsx'

class RecipePage extends React.Component {
  constructor (props) {
    super(props)
    this.props.dispatch(fetchRecipe(this.props.params.slug))
  }

  render () {
    return (<Title text={this.props.recipe.currentRecipe.title} />)
  }
}

const mapStateToProps = (state) => {
  return { recipe: state.recipe }
}

export default connect(mapStateToProps)(RecipePage)
