// @flow
import * as React from 'react'
import { connect, type Connector } from 'react-redux'
import type { State, Product } from '../../types'
import * as selectors from './selectors'
import config from '../../config'

type Props = {}

class Container extends React.Component<Props> {
	render() {
		const { props } = this
		return <a href={config.github.authUrl}>Github Login</a>
	}
}

const ms = (state: State) => ({
	TODO: selectors.TODO,
})

const conn: Connector<{}, Props> = connect(ms, { TODO })

export default conn(Container)
