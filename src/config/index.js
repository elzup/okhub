// @flow

import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using

import type { Reducer } from '../types'
const {
	NODE_ENV,
	REACT_APP_GITHUB_AUTH_CLIENT_ID,
	REACT_APP_GITHUB_AUTH_CLIENT_SECRET,
	REACT_APP_GITHUB_DEBUG_TOKEN,
	PUBLIC_URL,
} = process.env

// console.log(process.env)

if (
	!REACT_APP_GITHUB_AUTH_CLIENT_ID ||
	!REACT_APP_GITHUB_AUTH_CLIENT_SECRET ||
	!REACT_APP_GITHUB_DEBUG_TOKEN ||
	!NODE_ENV ||
	PUBLIC_URL === undefined ||
	PUBLIC_URL === null
) {
	console.error(process.env)
	throw new Error('Configuration not enouth. you need setup environments.')
}

type Config = {|
	+isDev: boolean,
	+github: {
		+authUrl: string,
		+clientId: string,
		+clientSecret: string,
		+debugToken: string,
		+api: {
			+url: string,
		},
	},
	+publicUrl: string,
|}

const isDev = NODE_ENV === 'development'

const configDevelopment = {}
const configProduction = {}

const clientId = REACT_APP_GITHUB_AUTH_CLIENT_ID
const clientSecret = REACT_APP_GITHUB_AUTH_CLIENT_SECRET
const debugToken = REACT_APP_GITHUB_DEBUG_TOKEN
const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}`

const config: Config = {
	isDev,
	github: {
		authUrl,
		clientId,
		clientSecret,
		debugToken,
		api: {
			url: 'https://api.github.com/graphql',
		},
	},
	publicUrl: PUBLIC_URL,
}

Object.assign(config, isDev ? configDevelopment : configProduction)
console.log(config)
const storageConfig = {
	key: 'primary',
	storage,
}

export function combineReducers(reducers: Object): Reducer {
	return persistCombineReducers(storageConfig, reducers)
}

export default config
