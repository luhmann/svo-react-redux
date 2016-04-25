const KEY_PREFIX = 'svo'
const DAY = 60 * 60 * 24 * 1000
const localStorage = window.localStorage || null

const _isFresh = function (timestamp, ttl) {
  return (Date.now() - timestamp) < ttl
}

export function setItem (key, value) {
  key = `${KEY_PREFIX}_${key}`
  value = {
    timestamp: Date.now(),
    payload: JSON.stringify(value)
  }
  return localStorage.setItem(key, JSON.stringify(value))
}

export function getItem (key, ttl = DAY) {
  let stored = JSON.parse(localStorage.getItem(`${KEY_PREFIX}_${key}`))

  if (stored) {
    if (_isFresh(stored.timestamp, ttl)) {
      return JSON.parse(stored.payload)
    }
  }

  return null
}

export function removeItem (key) {
  return localStorage.removeItem(`${KEY_PREFIX}_${key}`)
}

export function clear () {
  return localStorage.clear()
}
