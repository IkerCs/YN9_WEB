import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.sass']
})
export class LogoutComponent {
	constructor(
		private authService: AuthService,
		private route: ActivatedRoute,
	) {}

	ngOnInit() {
		if (this.authService.isAuthenticated()) this.authService.removeToken();
		window.location.href = '/';
	}
}
