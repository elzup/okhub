// @flow
import { combineReducers } from './config'
import IssueById from './containers/IssueById/reducer'
import IssuesContainer from './containers/IssuesContainer/reducer'
import System from './containers/System/reducer'

export default combineReducers({
	IssueById,
	IssuesContainer,
	System,
})
