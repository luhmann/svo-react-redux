import test from 'tape'
import RecipeReducer from './RecipeReducer.js'

test('Reducer: RecipeReducer', t => {
  t.test('initialState', t => {
    let state = RecipeReducer(undefined, { type: 'FOO' })

    t.equal(state.get('fetching'), false)
    t.equal(state.get('current'), null)
    t.end()
  })
})
