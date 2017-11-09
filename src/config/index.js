// @flow

const {
	NODE_ENV,
	REACT_APP_GITHUB_AUTH_CLIENT_ID,
	REACT_APP_GITHUB_AUTH_CLIENT_SECRET,
} = process.env

if (
	!REACT_APP_GITHUB_AUTH_CLIENT_ID ||
	!REACT_APP_GITHUB_AUTH_CLIENT_SECRET ||
	!NODE_ENV
) {
	console.error(process.env)
	throw new Error('Configuration not enouth. you need setup environments.')
}

type Config = {
	+isDev: boolean,
	+github: {
		+authUrl: string,
		+clientId: string,
		+clientSecret: string,
	},
}

const isDev = NODE_ENV === 'development'

const configDevelopment = {}
const configProduction = {}

const config: Config = {
	isDev,
	github: {
		authUrl: 'https://github.com/login/oauth/authorize?client_id=',
		clientId: REACT_APP_GITHUB_AUTH_CLIENT_ID,
		clientSecret: REACT_APP_GITHUB_AUTH_CLIENT_SECRET,
	},
	...(isDev ? configDevelopment : configProduction),
}

export default config
