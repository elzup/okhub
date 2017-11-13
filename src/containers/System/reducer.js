// @flow
import type { Action, System } from '../../types'
import { Actions } from './actionTypes'

export type State = System
export const initialState: State = { token: null, rehydrated: false }

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		case Actions.RECEIVE_TOKEN:
			return { ...state, token: action.token }
		case 'persist/REHYDRATE':
			return { ...state, rehydrated: true }
		default:
			return state
	}
}
