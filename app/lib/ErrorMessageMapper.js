import { CONNECTION_ERROR } from '../constants/ErrorTypes.js'

export default (error) => {
  switch (error.type) {
    case CONNECTION_ERROR:
      return 'Derzeit kann keine Verbindung zum Server aufgebaut werden. Bitte versuchen Sie es später erneut'
  }

  return 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut'
}
