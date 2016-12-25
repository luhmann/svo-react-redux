import { React, CSSModules, CSSModuleConfig } from '../../../lib/commonImports.js'
import styles from './Step.styl'

// import Ingredient from '../ingredients/Ingredient.jsx'

const Step = ({ step }) => (
  <div key={ step.step } styleName="root">
    <div styleName="number">{ step.step }</div>
    <div styleName="description">{ step.description }</div>
    {
      /*
      step.ingredients
        ? (<div>{ step.ingredients.map((ingredient, index) =>
            (<Ingredient key ={index} ingredient={ingredient} />))}</div>)
        : '' */
    }

   {
      /* step.utensils
         ? <div>{ step.utensils.join(', ') }</div>
        : '' */
    }
  </div>
)

Step.propTypes = {
  step: React.PropTypes.object.isRequired
}

export default CSSModules(Step, styles, CSSModuleConfig)
