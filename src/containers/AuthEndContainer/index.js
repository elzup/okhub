// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'

type Props = {}
type OProps = {}

class Container extends React.Component<Props> {
	render() {
		return <div />
	}
}

const ms = (state: State, ownProps: OProps) => {
	return {}
}

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
