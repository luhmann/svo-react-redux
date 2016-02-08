// TODO: elaborate here to retain the immutable data structure furtcher down the tree
export default (state) => (
  state.get('recipe').toJS()
)
