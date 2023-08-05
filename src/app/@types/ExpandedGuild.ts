import Guild from './Guild';


interface antiModSettings {
	channels: string[],
	roles: string[],
	users: string[],
	active: boolean,
	punishment: punishment,
}

interface antiMayus {
	channels: string[],
	roles: string[],
	users: string[],
	active: boolean,
	punishment: punishment,
	caps: number,
	min: number,
}
interface antiFlood {
	channels: string[],
	roles: string[],
	users: string[],
	active: boolean,
	punishment: punishment,
	mps: number,
	seg: number,
}

interface punishment {
	type: string,
	duration: number,
}

interface publication {
	channel: string,
	message: string,
}

interface log {
	channel: string,
	ignored: string[],
}

interface warning {
	user_id: string,
	type: string,
	reason: string,
	moderator: string,
	date: Date,
	id: string,
	expires: number,
	active: boolean,
}

interface confession {
	channel: string,
	log: string,
}

interface ignore {
	channels: string[],
	roles: string[],
	users: string[],
}

interface userTimestamp {
	id: string,
	start: number,
}

interface command {
	command: string,
	enabled: boolean,
	permissions: {
		bot: string[],
		user: string[],
		roles: string[],
	},
	ignore: ignore,
	cooldown: {
		duration: number,
		users: userTimestamp[],
	}
}

interface guildObject {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[key: string]: any;
	guildId: string,
	prefixes: string[],
	antiInvites: antiModSettings,
	antiLinks: antiModSettings,
	antiMayus: antiMayus,
	antiFlood: antiFlood,
	welcomes: publication,
	leaves: publication,
	messageLogs: log,
	mediaLogs: log,
	memberLogs: log,
	reactionLogs: log,
	commandLogs: log,
	warnings: warning[],
	confessions: confession,
	ignore: ignore,
	muteRole: string,
	commands: command[],
}

interface ExpandedGuild {
	partial: Guild,
	config: guildObject,
}

export default ExpandedGuild;
