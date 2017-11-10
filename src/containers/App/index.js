// @flow
import React from 'react'
import config from '../../config'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Home from '../../components/Home'

const IssuePage = ({ match }) => <div>IssuePage {match.params.id}</div>

const Home = () => {
	return <a href={config.github.authUrl}>Github Login</a>
}

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/authed/" component={IssuePage} />
			<Route path="/authed/:id" component={IssuePage} />
		</div>
	</Router>
)
export default App
