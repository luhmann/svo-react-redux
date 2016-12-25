import React from 'react'
import styled from 'styled-components'

import { colors, typography } from 'styles/variables.js'

const Root = styled.div`
  display: inline-block;
  position: relative;
`

const GaugeCircle = styled.svg`
  transform: rotate(270deg);
`

const Circle = styled.circle`
  stroke-width: 2em;
  fill: transparent;
`

const Background = styled(Circle)`
  stroke: ${colors.accent}
`

const Cover = styled(Circle)`
  stroke: #dedede;
  stroke-width: 2.01.em;
  border: 12px solid red;
`

const Center = styled(Circle)`
  fill: ${colors.background}
`

const Title = styled.div`
  font-family: ${typography.fonts.text};
  left: 0;
  right: 0;
  position: absolute;
  text-align: center;
  top: 30px;
`

const Label = styled.div`
font-family: ${typography.fonts.text};
  font-weight: bold;
  left: 0;
  right: 0;
  position: absolute;
  text-align: center;
  top: 50px;
`

const Gauge = ({ filledPercent, title, label, radius = 2, width = 6, height = 6 }) => {
  const cirumference = 2 * radius * Math.PI
  const offset = -(cirumference * filledPercent)

  return (
    <Root>
      <GaugeCircle width={`${width}em`} height={`${height}em`}>
        <Background r={`${radius}em`} cx={ `${width / 2}em` } cy={ `${height / 2}em` } fill="transparent" strokeDasharray={`${cirumference}em`} strokeDashoffset="0em"></Background>
        <Cover r={`${radius}em`} cx={ `${width / 2}em` } cy={ `${height / 2}em` } fill="transparent" strokeDasharray={`${cirumference}em`} strokeDashoffset={`${offset}em`}></Cover>
        <Center r={`${+radius + 0.9}em`} cx={ `${width / 2}em` } cy={ `${height / 2}em` } fill="transparent" strokeDasharray={`${cirumference}em`} strokeDashoffset="0em"></Center>
      </GaugeCircle>
      <Title>{ title }</Title>
      <Label>{ label }</Label>
    </Root>
  )
}

Gauge.propTypes = {
  radius: React.PropTypes.number,
  filledPercent: React.PropTypes.number.isRequired,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  title: React.PropTypes.string.isRequired,
  label: React.PropTypes.string.isRequired
}

export default Gauge
