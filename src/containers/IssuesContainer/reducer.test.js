// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle RECEIVE_ISSUES', () => {
	expect(
		reducer(
			initialState,
			actions.receiveIssues([
				{ body: '', closed: false, id: 's1', title: '', url: '' },
				{ body: '', closed: false, id: 's2', title: '', url: '' },
			]),
		),
	).toEqual(['s1', 's2'])
})
