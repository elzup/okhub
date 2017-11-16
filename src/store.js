// @flow
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { persistStore } from 'redux-persist'
import reducer from './reducer'
import type { Store } from './types'

import { receiveIssues } from './containers/IssuesContainer/actions'

export default () => {
	const middleware = [thunk]

	const devtool =
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

	// HACKME:
	const composer = !!devtool
		? compose(applyMiddleware(...middleware), devtool)
		: compose(applyMiddleware(...middleware))

	const store: Store = createStore(reducer, composer)
	persistStore(store, {}, (err, restoredState) => {
		const issues = [
			{ id: 's1', body: '', closed: false, title: '', url: '' },
			{ id: 's2', body: '', closed: false, title: '', url: '' },
		]
		store.dispatch(receiveIssues(issues))
	})
	return store
}
