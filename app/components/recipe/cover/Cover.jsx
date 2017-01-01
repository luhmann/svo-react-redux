import React from 'react'
import styled from 'styled-components'

import { ScalerResponsiveImage } from 'sharedComponents/'

const Root = styled(ScalerResponsiveImage)`
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
  img: ScalerResponsiveImage.propTypes.img.isRequired
}

export default Cover
