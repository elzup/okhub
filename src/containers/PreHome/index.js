// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State } from '../../types'
import { isLogin } from '../System/selectors'
import LoginContainer from '../LoginContainer'
import HomeContainer from '../HomeContainer'

type Props = {
	isLogin: boolean,
}

class Container extends React.Component<Props> {
	render() {
		if (isLogin) {
			return <HomeContainer />
		}
		return <LoginContainer />
	}
}

const ms = (state: State) => ({
	isLogin: isLogin(state),
})

const conn: Connector<{}, Props> = connect(ms, {})

export default conn(Container)
