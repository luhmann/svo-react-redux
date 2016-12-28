import config from '../config/env'
import { API_BASE_URL, IMG_BASE_URL, BASE_URL, SCALER_BASE_URL } from '../constants/Urls.js'
import * as cloudinary from 'cloudinary-core'

const cl = cloudinary.Cloudinary.new({
  cloud_name: config.cloudinary.cloud_name
})

export function buildRecipeApiUrl (slug) {
  return `${API_BASE_URL}/${config.api.endpoints.recipes}/${slug}`
}

export function buildImageUrl (path) {
  return `${IMG_BASE_URL}/${path}`
}

// TODO: Cleanup if no longer needed
export function buildCloudinaryResImageUrl (objectId, width = null) {
  let options = {
    secure: true,
    crop: 'fit'
  }

  if (width) {
    options.width = width
  }

  return cl.url(objectId, options)
}

export function buildScalerImageUrl (name, width = null) {
  // if(!width) {
  //   width = 100000 // HACK
  // }

  // return `${SCALER_BASE_URL}/resize?width=${width}&file=${name}`

  let base = `${SCALER_BASE_URL}/${name}`

  if (width) {
    return `${base}/:/rs=w:${width}/fx-sp`
  } else {
    return `${base}`
  }
}

export function buildAuthUrl () {
  return `${API_BASE_URL}/${config.api.endpoints.auth}`
}

export function buildRecipeUrl (slug) {
  return `${BASE_URL}/${slug}`
}
