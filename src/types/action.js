// @flow
import type { Action as IssuesContainerAction } from '../containers/IssuesContainer/actionTypes'
import type { Action as SystemAction } from '../containers/System/actionTypes'

export type ReduxInitAction = {
	type: '@@INIT',
}

export type Action = ReduxInitAction | IssuesContainerAction | SystemAction
