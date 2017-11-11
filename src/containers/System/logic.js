// @flow
import type { ThunkAction } from '../../types'
import { receiveToken } from './actions'
import config from '../../config'

const sleep = ms => new Promise(r => setTimeout(r, ms))

export function saveToken(token: string): ThunkAction {
	return async (dispatch, getState) => {
		// HACKME:
		while (!getState().System.rehydrated) {
			await sleep(100)
		}
		await dispatch(receiveToken(token))
		window.open(config.publicUrl + '/')
	}
}
