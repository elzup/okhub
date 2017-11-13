// @flow
import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import queryString from 'query-string'

import registerServiceWorker from './config/registerServiceWorker'
import configureStore from './store'
import config from './config'

import HomeContainer from './containers/HomeContainer'
import AuthEndContainer from './containers/AuthEndContainer'

import './config/init'

console.log(config)

const store = configureStore()
const rootEl = document.getElementById('root')

const AuthEnd = props => {
	const { token } = queryString.parse(props.location.search)
	return <AuthEndContainer token={token} />
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
