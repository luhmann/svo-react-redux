import React from 'react'
import styled from 'styled-components'
import { colors, layers, typography } from 'styles/variables.js'

import { ScalerResponsiveImage, Spinner } from 'sharedComponents/'

const Root = styled.section`
  height: 100vh;
  width: 100vw;
`

const BackgroundImage = styled(ScalerResponsiveImage)`
  height: 100vh;
  object-fit: cover;
  width: 100vw;
`

const Message = styled.div`
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: ${layers.standard}
`

const LoadingText = styled.div`
  color: ${colors.white};
  font-family: ${typography.fonts.text}
`

// TODO: Add multiple background images
let imageSrc = {
  objectId: 'honey_f0uwjn.jpg'
}

const Loading = (props) => (
  <Root>
    <BackgroundImage img={imageSrc} />
    <Message>
      <Spinner />
      <LoadingText>Laden</LoadingText>
    </Message>
  </Root>
)

Loading.propTypes = {}

export default Loading
