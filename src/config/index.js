// @flow

const {
	NODE_ENV,
	REACT_APP_GITHUB_AUTH_CLIENT_ID,
	REACT_APP_GITHUB_AUTH_CLIENT_SECRET,
	PUBLIC_URL,
} = process.env

console.log(process.env)

if (
	!REACT_APP_GITHUB_AUTH_CLIENT_ID ||
	!REACT_APP_GITHUB_AUTH_CLIENT_SECRET ||
	!NODE_ENV ||
	PUBLIC_URL === undefined ||
	PUBLIC_URL === null
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
	+publicUrl: string,
}

const isDev = NODE_ENV === 'development'

const configDevelopment = {}
const configProduction = {}

const clientId = REACT_APP_GITHUB_AUTH_CLIENT_ID
const clientSecret = REACT_APP_GITHUB_AUTH_CLIENT_SECRET
const authUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}`

const config: Config = {
	isDev,
	github: {
		authUrl,
		clientId,
		clientSecret,
	},
	publicUrl: PUBLIC_URL,
	...(isDev ? configDevelopment : configProduction),
}

export default config
