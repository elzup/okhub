// @flow
import type { Issue } from '../../types'

export const RECEIVE_ISSUES: 'IssuesContainer/RECEIVE_ISSUES' =
	'IssuesContainer/RECEIVE_ISSUES'

export const Actions = {
	RECEIVE_ISSUES,
}

export type ReceiveIssues = {
	type: typeof RECEIVE_ISSUES,
	issues: Issue[],
}

export type Action = ReceiveIssues
