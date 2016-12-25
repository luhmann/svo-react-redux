import React from 'react'
import { connect } from 'react-redux'

import { fetchRecipe } from '../actions/recipe.js'
import RecipeDataTransformer from '../lib/RecipeDataTransformer.js'

import Loading from '../components/loading/Loading.jsx'
import Recipe from '../components/recipe/Recipe.jsx'

class RecipePage extends React.Component {
  // constructor (props) {
  //   super(props)
  // }

  componentWillMount () {
    this.props.dispatch(fetchRecipe(this.props.params.slug))
  }

  render () {
    if (this.props.recipe.fetching) {
      return (<Loading text='Lade Rezept'/>)
    }

    if (this.props.recipe.current) {
      return (<Recipe recipe={this.props.recipe.current} />)
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
