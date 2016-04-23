import { API_BASE_URL, IMG_BASE_URL } from '../constants/Urls.js'
import * as cloudinary from 'cloudinary-core'

const cl = cloudinary.Cloudinary.new({
  cloud_name: 'svo',
  api_key: '885191739148781'
})

export function buildRecipeUrl (slug) {
  return `${API_BASE_URL}/recipe/${slug}`
}

export function buildImageUrl (path) {
  return `${IMG_BASE_URL}/${path}`
}

export function buildCloudinaryUrl (objectId) {
  return cl.url(objectId, { secure: true, width: 1024, crop: 'fit' })
}
