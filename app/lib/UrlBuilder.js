import { API_BASE_URL, IMG_BASE_URL } from '../constants/Urls.js'

export function buildRecipeUrl (slug) {
  return `${API_BASE_URL}/recipe/${slug}`
}

export function buildImageUrl (path) {
  return `${IMG_BASE_URL}/${path}`
}
