import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
	selector: 'app-oauth2',
	templateUrl: './oauth2.component.html',
	styleUrls: ['./oauth2.component.sass']
})
export class Oauth2Component {
	constructor(
		private authService: AuthService,
		private route: ActivatedRoute,
	) {}

	ngOnInit() {
		const token: string | null = this.route.snapshot.queryParamMap.get('token');
		console.log(token);
		if (token) this.authService.setToken(token);
		window.location.href = '/';
	}
}
