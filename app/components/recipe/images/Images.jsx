import React from 'react'
import styled from 'styled-components'
import { dimensions } from 'styles/variables.js'

import { ExternalResponsiveImage } from 'sharedComponents/'

const Root = styled.section`
  line-height: 0
  margin-bottom: ${dimensions.modules.marginBottom}
  padding: ${dimensions.modules.marginBottom} ${dimensions.modules.vPadding} 0
`

const Image = styled(ExternalResponsiveImage)`
  display: inline-block;
  margin-bottom: ${dimensions.modules.vPadding};
  object-fit: cover;
  width: ${100 - 2 * dimensions.modules.vPadding}vw;
  height: ${(2 / 3) * (100 - 2 * dimensions.modules.vPadding)}vw;
`

const Images = ({ images }) => (
  <Root>
    {
      images.map((img, index) => (
        <Image key={index} img={img} sizes="98.2vw" />
      ))
    }
  </Root>

)

Images.propTypes = {
  images: React.PropTypes.array.isRequired
}

export default Images
