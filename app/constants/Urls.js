import config from '../config/env'

export const API_BASE_URL = `${config.api.protocol}://${config.api.host}/${config.api.baseUrl}/v${config.api.version}`

export const API_ENDPOINT_RECIPES = `${API_BASE_URL}/${config.api.endpoints.recipes}`

export const IMG_BASE_URL = 'http://localhost:7878/assets'

export const BASE_URL = `${config.url.protocol}://${config.url.host}`

export const SCALER_BASE_URL = `${config.scaler.protocol}://${config.scaler.host}:${config.scaler.port}`
