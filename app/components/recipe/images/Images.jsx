import { React, CSSModules, CSSModuleConfig } from 'lib/commonImports.js'

import ResponsiveImage from 'sharedComponents/ResponsiveImage/ResponsiveImage.jsx'
import styles from './Images.styl'


const Images = ({ images }) => (
  <div styleName="root">
    { 
      images.map((img, index) => ( <ResponsiveImage key={index} styleName='image' img={img} sizes="98.2vw" />))
    }
  </div> 
  
)

Images.propTypes = {
  images: React.PropTypes.array.isRequired
}

export default CSSModules(Images, styles, CSSModuleConfig)
