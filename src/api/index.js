// @flow

// import camelcaseKeysRecursive from 'camelcase-keys-recursive'
import { normalizeIssue } from './normalize'
import request from 'superagent'
import config from '../config'

import type { Issue } from '../types'

// const host = 'http://localhost:3001'
// const TIMEOUT = 5000

function requestQl(query: string, token: string) {
	const questionsRequest = request.post(config.github.api.url).set({
		Authorization: `bearer ${token}`,
	})
	return new Promise((resolve, reject) => {
		questionsRequest.end((err, res) => {
			if (err) {
				reject(err)
			} else {
				resolve(res)
			}
		})
	})
}

type FetchIssueCallback = {
	issues: Issue[],
}

export async function fetchIssues(token: string): Promise<FetchIssueCallback> {
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
}
`
	const res = await requestQl(query, token)
	console.log(res)
	return normalizeIssue(JSON.parse(res.body))
}
