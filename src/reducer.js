// @flow
import { combineReducers } from './config'
import IssuesContainer from './containers/IssuesContainer/reducer'
import System from './containers/System/reducer'

export default combineReducers({
	IssuesContainer,
	System,
})
