// @flow
import type { Issue } from '../../types'

import { RECEIVE_ISSUES } from './actionTypes'
import type { ReceiveIssues } from './actionTypes'

export function receiveIssues(issues: Issue[]): ReceiveIssues {
	return {
		type: RECEIVE_ISSUES,
		issues,
	}
}
