// @flow
import fetch from 'isomorphic-fetch'
import { REQUEST_AUTH_TOKEN, RECEIVE_AUTH_TOKEN } from '../constants/ActionTypes.js'
import { buildAuthUrl } from '../lib/UrlBuilder.js'
import * as storage from '../lib/localStorageAdapter.js'
import { handleErrors, mapErrors } from '../lib/handle-fetch-errors'
import config from '../config/env'

const TOKEN_STORAGE_KEY = 'token'

export function fetchToken () {
  return (dispatch) => {
    dispatch(requestToken())

    if (storage.getItem(TOKEN_STORAGE_KEY)) {
      dispatch(receiveToken(storage.getItem(TOKEN_STORAGE_KEY)))
    } else {
      fetch(buildAuthUrl(), {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: config.api.auth.email,
          password: config.api.auth.password
        })
      })
        .then(handleErrors)
        .then((response) => response.json())
        .then((json) => {
          dispatch(receiveToken(json.token))
          storage.setItem(TOKEN_STORAGE_KEY, json.token)
        })
        .catch((ex) => {
          dispatch(mapErrors(ex))
        })
    }
  }
}

function requestToken () {
  return { type: REQUEST_AUTH_TOKEN }
}

function receiveToken (token) {
  return { type: RECEIVE_AUTH_TOKEN, token }
}
