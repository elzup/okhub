// @flow

import * as api from './index'
import config from '../config'

test('request', async done => {
	const res = await api.fetchIssues(config.github.debugToken).catch(e => {
		console.error(e)
	})
	expect(res).toEqual(['s1', 's2'])
	done()
})
