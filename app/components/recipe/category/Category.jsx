import renderIf from 'render-if'
import React from 'react'
import styled from 'styled-components'
import { colors, typography } from 'styles/variables.js'

const Root = styled.div`
  color: ${colors.white};
  font-family: ${typography.fonts.subheadline};
  margin-top: 0.4em;
`

const categoryMapping = {
  breakfast: 'Frühstück',
  lunch: 'Mittagessen',
  dinner: 'Abendessen',
  dessert: 'Dessert & Backen',
  snack: 'Kleinigkeiten & Snacks'
}

const Category = ({ type }) => {
  return renderIf(!!categoryMapping[type])(() => (
    <Root>
      { categoryMapping[type] }
    </Root>
  ))
}

Category.propTypes = {
  type: React.PropTypes.oneOf(Object.keys(categoryMapping)).isRequired
}

export default Category
