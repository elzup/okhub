// @flow
import { RECEIVE_TOKEN } from './actionTypes'
import type { ReceiveToken } from './actionTypes'

export function receiveToken(token: string): ReceiveToken {
	return {
		type: RECEIVE_TOKEN,
		token,
	}
}
