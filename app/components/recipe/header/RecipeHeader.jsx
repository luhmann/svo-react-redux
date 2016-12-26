import nl2br from 'react-nl2br'
import React from 'react'
import styled from 'styled-components'
import { colors, typography } from 'styles/variables.js'

import { Cover, Category, Quickinfo } from '../'

const Header = styled.header`
  position: relative;
`

const Meta = styled.section`
  background: linear-gradient(to top, #333, transparent);
  bottom: 0;
  color: ${colors.white};
  text-align: center;
  position: absolute;
  padding: 1em 1%;
  width: 100vw;
`

const Title = styled.h2`
  font-family: ${typography.fonts.headline};
  letter-spacing: 1px;
  line-height: 1; 
  margin: 0;
`

const RecipeHeader = ({cover, title, category, quickinfo}) => (
  <Header>
    <Cover img={cover}/>
    <Meta>
      <Title>{ nl2br(title) }</Title>
      <Category type={category} />
      <Quickinfo quickinfo={quickinfo}/>
    </Meta>
  </Header>
)

RecipeHeader.propTypes = {
  cover: React.PropTypes.object,
  title: React.PropTypes.string,
  category: React.PropTypes.string,
  quickinfo: React.PropTypes.object
}

export default RecipeHeader
