import RecipeReducer from './RecipeReducer.js'

describe.only('Reducer: RecipeReducer', () => {
  it('initialState', () => {
    let state = RecipeReducer(undefined, { type: 'FOO' })

    expect(state.get('fetching')).toBe(false)
    expect(state.get('current')).toBe(null)
  })
})
