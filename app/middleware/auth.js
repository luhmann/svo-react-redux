const auth = store => next => action => {
  console.log(store, next, action)
  return next(action)
}

export default auth
