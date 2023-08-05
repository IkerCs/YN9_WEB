import { Component } from '@angular/core';

import { AuthService } from '../auth.service';
import User from '../@types/User';
import Guild from '../@types/Guild';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.sass']
})
export class ProfileComponent {
	user: User | null = JSON.parse(this.authService.getUserInfo()!);
	guilds: Guild[] = this.user?.profile.guilds || [];
	adminGuilds: Guild[] = this.guilds.filter((guild: Guild) => (guild.permissions & 0x20) === 0x20).sort();
	guildData = [
		{ label: 'Servidores en total', icon: 'bx bx-server', value: this.guilds.length },
		{ label: 'Servidores con YN9', icon: 'bx bx-bot', value: this.guilds.filter((guild: Guild) => guild.yn9).length },
		{ label: 'Servidores con administrador', icon: 'bx bx-shield', value: this.guilds.filter((guild: Guild) => guild.permissions & 0x8).length },
	];
	mfa = this.user?.profile?.mfa_enabled ? '<p>Tu cuenta tiene autenticación en dos factores</p>' : '<a href="https://support.discord.com/hc/es/articles/219576828-Setting-up-Two-Factor-Authentication">Es recomendado activar la autenticación en dos factores para acceder a características de YN9</a>';

	constructor(
		private authService: AuthService,
	) { }

	ngOnInit(): void {
		if (!this.authService.isAuthenticated()) window.location.href = '/login';
	}

	openLink(url: string): void {
		window.location.href = url;
	}
}
