// @flow
import type { Action, Issue } from '../../types'
import { Actions } from '../IssuesContainer/actionTypes'

export type State = { [id: string]: Issue }

export const initialState: State = {}

export default function(state: State = initialState, action: Action): State {
	switch (action.type) {
		default:
			return state
	}
}
