// @flow
import type { ThunkAction } from '../../types'
import { receiveToken } from './actions'
import config from '../../config'

export function saveToken(token: string): ThunkAction {
	return async dispatch => {
		await dispatch(receiveToken(token))
		window.open(config.publicUrl + '/')
	}
}
