// @flow

// import camelcaseKeysRecursive from 'camelcase-keys-recursive'
import { normalizeIssue } from './normalize'
import request from 'superagent'
import config from '../config'

import type { Issue } from '../types'

// const host = 'http://localhost:3001'
// const TIMEOUT = 5000

const baseHeaders = {
	'Content-Type': 'application/json',
	Authorization: 'bearer',
}

function requestQl(query) {
	const questionsRequest = request.post(config.github.api.url).set(baseHeaders)
	return new Promise((resolve, reject) => {
		questionsRequest.end((err, res) => {
			resolve(err || res)
		})
	})
}

type FetchIssueCallback = {
	issues: Issue[],
}

export async function fetchIssues(): Promise<FetchIssueCallback> {
	const query = `
	query {
  repository(owner:"cpslab", name:"ok") {
    owner{
      login
      url
    }
    issues(last:20) {
      edges {
        node {
          title
          url
          comments(first:10){
            nodes{
              author{
                login
              }
              body
            }
          }
          labels(first:5) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}`
	const res = await requestQl(query)
	return normalizeIssue(res.body)
}
