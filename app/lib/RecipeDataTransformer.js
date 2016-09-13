// TODO: elaborate here to retain the immutable data structure further down the tree
export default (state) => (
  state.get('recipe').toJS()
)
