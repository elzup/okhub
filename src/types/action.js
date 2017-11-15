// @flow
import type { Action as IssueByIdAction } from '../containers/IssueById/actionTypes'
import type { Action as IssuesContainerAction } from '../containers/IssuesContainer/actionTypes'
import type { Action as SystemAction } from '../containers/System/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action =
	| ReduxInitAction
	| IssueByIdAction
	| IssuesContainerAction
	| SystemAction
