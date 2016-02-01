import React from 'react'
import moment from 'moment'
import 'moment/locale/de'

const RecipeHeader = (props) => (
  <header>
    <h1>{ props.title }</h1>
    <div>{ props.subtitle }</div>
    <div>Veröffentlicht am: { moment(props.published, 'X').format('Do MMMM YYYY, HH:mm:ss') }</div>
  </header>
)

RecipeHeader.propTypes = {
  title: React.PropTypes.string,
  subtitle: React.PropTypes.string
}

export default RecipeHeader
