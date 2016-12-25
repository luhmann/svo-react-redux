import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Gauge.styl'

const Gauge = ({ filledPercent, title, label, radius = 2, width = 6, height = 6 }) => {
  const cirumference = 2 * radius * Math.PI
  const offset = -(cirumference * filledPercent)

  return (
    <div styleName="container">
      <svg styleName="svg" width={`${width}em`} height={`${height}em`}>
        <circle styleName="background" r={`${radius}em`} cx={ `${width / 2}em` } cy={ `${height / 2}em` } fill="transparent" strokeDasharray={`${cirumference}em`} strokeDashoffset="0em"></circle>
        <circle styleName="cover" r={`${radius}em`} cx={ `${width / 2}em` } cy={ `${height / 2}em` } fill="transparent" strokeDasharray={`${cirumference}em`} strokeDashoffset={`${offset}em`}></circle>
        <circle styleName="center" r={`${+radius + 0.9}em`} cx={ `${width / 2}em` } cy={ `${height / 2}em` } fill="transparent" strokeDasharray={`${cirumference}em`} strokeDashoffset="0em"></circle>
      </svg>
      <div styleName="title">{ title }</div>
      <div styleName="label">{ label }</div>
    </div>
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

export default CSSModules(Gauge, styles, CSSModuleConfig)
