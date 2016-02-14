import { MODE } from './Config.js'

export const API_BASE_URL = (MODE === 'prod') ? 'http://localhost:3030/api/v1' : 'http://localhost:7878/api/v1'

export const IMG_BASE_URL = 'http://localhost:7878/assets'
