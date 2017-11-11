// @flow

import type { Store as ReduxStore, Dispatch as ReduxDispatch } from 'redux'
import type { Action as _Action } from './action'
import type { State as _State } from './state'

type RehydrateAction = {
	type: 'persist/REHYDRATE',
	payload: _State,
}

export type State = _State
export type Action = _Action | RehydrateAction

export type Reducer = (state: State, action: Action) => State
export type Reducers = {
	[key: string]: Reducer,
}

export type GetState = () => State

export type ThunkAction = (
	dispatch: ReduxDispatch<*>,
	getState: GetState,
) => void | Promise<void>

type ThunkDispatch<A> = ThunkAction => A

export type Dispatch = ReduxDispatch<Action> & ThunkDispatch<Action>
export type Store = ReduxStore<State, Action, Dispatch>

export type Item = {
	id: number,
	name: string,
}

type ID = number
type URI = string

export type Organization = {
	avatarUrl: URI,
	description: String,
	email: String,
	id: ID,
	location: String,
	login: String,
	members: number[],
	name: String,
	newTeamResourcePath: URI,
	newTeamUrl: URI,
	repositories: number[],
	resourcePath: URI,
	teamsUrl: URI,
	url: URI,
	viewerCanAdminister: boolean,
	viewerCanCreateProjects: boolean,
	viewerCanCreateRepositories: boolean,
	viewerCanCreateTeams: boolean,
	viewerIsAMember: boolean,
	websiteUrl: URI,
}

export type User = {
	id: number,
	avatarUrl: String,
	name: string,
	url: string,
}

export type Repository = {
	id: number,
	name: string,
	description: string,
	issues: number[],
}

export type Issue = {
	id: number,
	author: number,
	bodyText: string,
	closed: boolean,
}

export type System = {
	rehydrated: boolean,
	token: ?string,
}
