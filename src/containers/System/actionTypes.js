// @flow
export const RECEIVE_TOKEN: 'System/RECEIVE_TOKEN' = 'System/RECEIVE_TOKEN'

export const Actions = {
	RECEIVE_TOKEN,
}

export type ReceiveToken = {
	type: typeof RECEIVE_TOKEN,
	token: string,
}

export type Action = ReceiveToken
