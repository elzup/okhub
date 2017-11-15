// @flow
import reducer, { initialState } from './reducer'
import * as actions from './actions'
import type { Issue } from '../../types'

test('provide the initial state', () => {
	expect(reducer(undefined, { type: '@@INIT' })).toEqual(initialState)
})

test('handle RECEIVE_ISSUES', () => {
	expect(
		reducer(
			[
				{ id: 1, author: 0, bodyText: 'I', closed: false },
				{ id: 2, author: 0, bodyText: 'am', closed: false },
			],
			actions.receiveIssues([
				{ id: 2, author: 0, bodyText: 'a', closed: true },
				{ id: 3, author: 0, bodyText: 'UMR', closed: false },
			]),
		),
	).toEqual([
		{ id: 1, author: 0, bodyText: 'I', closed: true },
		{ id: 2, author: 0, bodyText: 'a', closed: false },
		{ id: 3, author: 0, bodyText: 'UMR', closed: false },
	])
})
