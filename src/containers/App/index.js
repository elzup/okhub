// @flow
import React from 'react'
import PreHome from '../PreHome'
import AuthEnd from '../AuthEnd'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// import Home from '../../components/Home'

const IssuePage = ({ match }) => <div>IssuePage {match.params.id}</div>

const App = () => (
	<Router>
		<div>
			<Route exact path="/" component={PreHome} />
			<Route path="/authed" component={AuthEnd} />
		</div>
	</Router>
)
export default App
