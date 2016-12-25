import styled, { keyframes } from 'styled-components'
import { colors } from 'styles/variables.js'

const pulsate = keyframes`
 0% {
    transform: scale(0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.2);
    opacity: 0;
  } 
`

const Spinner = styled.div`
  border: 5px solid ${colors.meanGray};
  border-radius: 30px;
  height: 30px;
  opacity: 0;
  margin: 0 auto;
  margin-bottom: 0.25rem;
  width: 30px;
  animation: ${pulsate} 1s ease-out;
  animation-iteration-count: infinite; 
`

export default Spinner
