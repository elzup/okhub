// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import { saveToken } from '../System/logic'

type Props = {
	token?: string,
	saveToken: Function,
}

type OProps = {
	token?: string,
}

class Container extends React.Component<Props> {
	componentDidMount() {
		this.props.saveToken(this.props.token)
	}
	render() {
		return <div />
	}
}

const ms = (state: State, ownProps: OProps) => {
	return ownProps
}

const conn: Connector<OProps, Props> = connect(ms, { saveToken })

export default conn(Container)
