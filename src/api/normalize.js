// @flow

import { normalize, schema } from 'normalizr'

// Define your comments schema
const user = new schema.Entity('users')

// Define your article
const question = new schema.Entity('questions', {
	solvers: [user],
})

export const normalizeIssue = (data: Object) => {
	return normalize(data, [question]).entities
}
