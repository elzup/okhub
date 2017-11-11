// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'

import LoginContainer from '../LoginContainer'
import { isLogin } from '../System/selectors'

import type { State } from '../../types'

type Props = {
	isLogin: boolean,
}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		if (!props.isLogin) {
			return <LoginContainer />
		}
		return (
			<div>
				<h1>Home</h1>
			</div>
		)
	}
}

const ms = (state: State) => ({
	isLogin: isLogin(state),
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
