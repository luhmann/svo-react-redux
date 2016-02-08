import React from 'react'
import { connect } from 'react-redux'

import { fetchRecipe } from '../actions/index'
import RecipeDataTransformer from '../lib/RecipeDataTransformer.js'

import ErrorPage from './ErrorPage.jsx'
import Loading from '../components/loading/Loading.jsx'
import Recipe from '../components/recipe/Recipe.jsx'

class RecipePage extends React.Component {
  constructor (props) {
    super(props)
    props.dispatch(fetchRecipe(props.params.slug))
  }

  render () {
    if (this.props.recipe.fetching) {
      return (<Loading />)
    }

    if (this.props.recipe.current) {
      return (<Recipe recipe={ this.props.recipe.current } />)
    }

    return <div>Kapott</div>
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
  return {
    recipe: RecipeDataTransformer(state)
  }
}

export default connect(mapStateToProps)(RecipePage)
