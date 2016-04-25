import { CONNECTION_ERROR, NOT_FOUND } from '../constants/ErrorTypes.js'

export default (error) => {
  switch (error.type) {
    case CONNECTION_ERROR:
      return 'Derzeit kann keine Verbindung zum Server aufgebaut werden. Bitte versuchen Sie es später erneut.'
    case NOT_FOUND:
      return 'Die gewünschte Seite konnte nicht gefunden werden.'
  }

  return 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
}
