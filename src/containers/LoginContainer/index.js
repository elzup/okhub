// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import config from '../../config'

type Props = {}

class Container extends React.Component<Props> {
	render() {
		return <a href={config.github.authUrl}>Login with GitHub</a>
	}
}

const ms = (state: State) => ({})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
