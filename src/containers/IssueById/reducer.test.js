// @flow
import reducer, { initialState } from './reducer'
import * as actions from '../IssuesContainer/actions'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle RECEIVE_ISSUES', () => {
	expect(
		reducer(
			initialState,
			actions.receiveIssues([
				{ id: 's1', body: '', closed: false, title: '', url: '' },
				{ id: 's2', body: '', closed: false, title: '', url: '' },
			]),
		),
	).toEqual({
		s1: { id: 's1', body: '', closed: false, title: '', url: '' },
		s2: { id: 's2', body: '', closed: false, title: '', url: '' },
	})
})
