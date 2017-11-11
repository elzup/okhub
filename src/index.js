// @flow
import * as React from 'react'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import registerServiceWorker from './config/registerServiceWorker'
import configureStore from './store'
import queryString from 'query-string'

import config from './config'

import { saveToken } from './containers/System/logic'

import HomeContainer from './containers/HomeContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './config/init'

console.log(config)

const store = configureStore()
const rootEl = document.getElementById('root')

const AuthEnd = props => {
	const params = queryString.parse(props.location.search)
	return <Route onEnter={saveToken(params.token)} />
}

if (rootEl !== null) {
	ReactDOM.render(
		<Provider store={store}>
			<Router>
				<div>
					<Route exact path="/" component={HomeContainer} />
					<Route path="/authed" component={AuthEnd} />
				</div>
			</Router>
		</Provider>,
		rootEl,
	)
	registerServiceWorker()
}
