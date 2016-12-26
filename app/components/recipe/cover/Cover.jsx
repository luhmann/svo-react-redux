import React from 'react'
import styled from 'styled-components'

import { ExternalResponsiveImage } from 'sharedComponents/'

const Root = styled(ExternalResponsiveImage)`
  height: 65vh;
  object-fit: cover;
  width: 100vw;
`

const Cover = ({ img }) => (
  <Root
    img={img}
  />
)

Cover.propTypes = {
  img: ExternalResponsiveImage.propTypes.img.isRequired
}

export default Cover
