// @flow

import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using
import type { Reducer } from '../types'
const {
	NODE_ENV,
	REACT_APP_GITHUB_AUTH_CLIENT_ID,
	REACT_APP_GITHUB_AUTH_CLIENT_SECRET,
	PUBLIC_URL,
} = process.env

console.log(process.env)

if (
	!REACT_APP_GITHUB_AUTH_CLIENT_ID ||
	!REACT_APP_GITHUB_AUTH_CLIENT_SECRET ||
	!NODE_ENV ||
	PUBLIC_URL === undefined ||
	PUBLIC_URL === null
) {
	console.error(process.env)
	throw new Error('Configuration not enouth. you need setup environments.')
}

type Config = {
	+isDev: boolean,
	+github: {
		+authUrl: string,
		+clientId: string,
		+clientSecret: string,
		+api: {
			+host: string,
		},
	},
	+publicUrl: string,
}

const isDev = NODE_ENV === 'development'

const configDevelopment = {}
const configProduction = {}

const clientId = REACT_APP_GITHUB_AUTH_CLIENT_ID
const clientSecret = REACT_APP_GITHUB_AUTH_CLIENT_SECRET
const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}`

const config: Config = {
	isDev,
	github: {
		authUrl,
		clientId,
		clientSecret,
		api: {
			url: 'https://api.github.com/graphql',
		},
	},
	publicUrl: PUBLIC_URL,
	...(isDev ? configDevelopment : configProduction),
}

const storageConfig = {
	key: 'primary',
	storage,
}
export function combineReducers(reducers: Object): Reducer {
	return persistCombineReducers(storageConfig, reducers)
}

export default config
