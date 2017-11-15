// @flow
import type { State as IssuesContainer } from '../containers/IssuesContainer/reducer'
import type { State as System } from '../containers/System/reducer'

export type State = {
	IssuesContainer: IssuesContainer,
	System: System,
}
