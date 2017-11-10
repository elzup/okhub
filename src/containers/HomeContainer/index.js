// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'

type Props = {}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return (
			<div>
				<h1>Home</h1>
			</div>
		)
	}
}

const ms = (state: State) => ({})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
