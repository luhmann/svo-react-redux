import React from 'react'
import { connect } from 'react-redux'

import { fetchRecipe } from '../actions/index'

import Loading from '../components/loading/Loading.jsx'
import Recipe from '../components/recipe/Recipe.jsx'

class RecipePage extends React.Component {
  constructor (props) {
    super(props)
    this.props.dispatch(fetchRecipe(this.props.params.slug))
  }

  render () {
    if (this.props.recipe.get('fetching')) {
      return (<Loading />)
    } else if (this.props.recipe.get('current')) {
      return (<Recipe recipe={ this.props.recipe.get('current').toJS() } />)
    } else {
      return <div>Kapott</div>
    }
  }

  shouldComponentUpdate (nextProps) {
    return this.props.recipe !== nextProps.recipe
  }
}

RecipePage.propTypes = {
  dispatch: React.PropTypes.func,
  recipe: React.PropTypes.object,
  params: React.PropTypes.object
}

const mapStateToProps = (state) => {
  return { recipe: state.get('recipe') }
}

export default connect(mapStateToProps)(RecipePage)
