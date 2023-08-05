import Guild from './Guild';

interface User {
	id: string;
	username: string;
	avatar: string;
	discriminator: string;
	public_flags: number;
	flags: number;
	banner: string;
	banner_color: string;
	accent_color: number,
	global_name: string,
	mfa_enabled: boolean,
	locale: string,
	premium_type: number,
	verified: boolean,
	provider: string,
	accessToken: string,
	guilds: Guild[],
}

interface Session {
	profile: User,
	accessToken: string,
}

export default Session;