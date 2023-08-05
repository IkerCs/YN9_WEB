import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import ExpandedGuild from '../../@types/ExpandedGuild';
import User from '../../@types/User';
import { AuthService } from '../../auth.service';

@Component({
	selector: 'app-main',
	templateUrl: './main.component.html',
	styleUrls: ['./main.component.sass']
})
export class MainComponent {
	guild: ExpandedGuild | null = null;
	user: User | null = JSON.parse(this.authService.getUserInfo()!);
	id: string | null = this.route.snapshot.paramMap.get('id');

	constructor (
		private authService: AuthService,
		private route: ActivatedRoute,	
	) { }

	ngOnInit() {
		if (!this.id) return window.location.href = '/dashboard/@me';
		this.authService.getGuildInfoObserver(this.id).subscribe({
			next: (guild: ExpandedGuild | null) => {
				if (!guild) this.openWindow(`https://discord.com/oauth2/authorize?client_id=746581603844751460&permissions=8&scope=bot%20applications.commands&guild_id=${this.id}`);
				else this.guild = guild;
			},
			error: (err) => this.authService.handleHTTPError(err),
		});
		return;
	}

	openWindow(url: string) {
		const windowPopup = window.open(url, 'newwindow', 'width=500,height=700');
		if (windowPopup == null) window.location.href = url;
	}
}
