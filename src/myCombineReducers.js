// @flow

import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // or whatever storage you are using

const config = {
	key: 'primary',
	storage,
}

export function combineReducers(reducers: any) {
	persistCombineReducers(config, reducers)
}
