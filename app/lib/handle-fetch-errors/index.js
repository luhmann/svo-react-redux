import { CONNECTION_ERROR, NOT_FOUND } from '../../constants/ErrorTypes.js'
import { emitError } from '../../actions/error.js'

const mapErrorCode = (code) => {
  if (code === 404) {
    return NOT_FOUND
  } else {
    return CONNECTION_ERROR
  }
}

export function handleErrors (response) {
  if (response.status < 300) {
    return response
  } else {
    throw Error(response.status)
  }
}

export function mapErrors (error) {
  return emitError({
    type: mapErrorCode(parseInt(error.message, 10)),
    details: error
  })
}
