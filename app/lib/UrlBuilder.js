import config from '../config/env'
import { API_BASE_URL, IMG_BASE_URL } from '../constants/Urls.js'
import * as cloudinary from 'cloudinary-core'

const cl = cloudinary.Cloudinary.new({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key
})

export function buildRecipeUrl (slug) {
  return `${API_BASE_URL}/${config.api.endpoints.recipes}/${slug}`
}

export function buildImageUrl (path) {
  return `${IMG_BASE_URL}/${path}`
}

export function buildCloudinaryUrl (objectId) {
  return cl.url(objectId, { secure: true, width: 1024, crop: 'fit' })
}

export function buildAuthUrl () {
  return `${API_BASE_URL}/${config.api.endpoints.auth}`
}
