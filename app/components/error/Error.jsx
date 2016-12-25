import { React } from '../../lib/commonImports.js'

const Error = ({ message }) => (
  <div>{ message }</div>
)

Error.propTypes = {
  message: React.PropTypes.string.isRequired
}

export default Error
