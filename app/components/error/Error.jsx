import React from 'react'

const Error = ({ message }) => (
  <div>{ message }</div>
)

Error.propTypes = {
  message: React.PropTypes.string.isRequired
}

export default Error
