// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'

type Props = {}

class Container extends React.Component<Props> {
	render() {
		return <div>hello</div>
	}
}

const ms = (state: State) => ({})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
