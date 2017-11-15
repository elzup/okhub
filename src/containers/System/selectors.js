// @flow
import type { State } from '../../types'

export function isLogin(state: State): boolean {
	return state.System.token !== null
}
