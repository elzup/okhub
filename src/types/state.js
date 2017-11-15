// @flow
import type { State as IssueById } from '../containers/IssueById/reducer'
import type { State as IssuesContainer } from '../containers/IssuesContainer/reducer'
import type { State as System } from '../containers/System/reducer'

export type State = {
	IssueById: IssueById,
	IssuesContainer: IssuesContainer,
	System: System,
}
