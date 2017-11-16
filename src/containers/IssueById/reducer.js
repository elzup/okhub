// @flow
import type { Action, Issue } from '../../types'
import { Actions } from '../IssuesContainer/actionTypes'

export type State = { [id: string]: Issue }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_ISSUES: {
			return {
				...state,
				...action.issues.reduce((p, c) => ({ ...p, [c.id]: c }), {}),
			}
		}
		default:
			return state
	}
}
