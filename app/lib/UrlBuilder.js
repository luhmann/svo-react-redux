import * as urls from '../constants/Urls.js'

export function buildRecipeUrl (slug) {
  return `${urls.API_BASE_URL}/recipe/${slug}`
}
