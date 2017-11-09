// @flow
import React from 'react'
import config from '../../config'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

// import Home from '../../components/Home'

const IssuePage = ({ match }) => <div>IssuePage {match.params.id}</div>

const Home = () => {
	return (
		<Link to={config.github.authUrl + config.github.clientId}>
			Github Login
		</Link>
	)
}

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={Home} />
			<Route path="/issue/:id" component={IssuePage} />
		</div>
	</Router>
)

export default App
