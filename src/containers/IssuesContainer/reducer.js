// @flow
import type { Action } from '../../types'
import { Actions } from './actionTypes'

export type State = string[]
export const initialState: State = []

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_ISSUES:
			return [...state, ...action.issues.map(v => v.id)]
		default:
			return state
	}
}
