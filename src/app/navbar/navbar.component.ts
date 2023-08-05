import { Component, ElementRef, ViewChild } from '@angular/core';
import { AuthService } from '../auth.service';

import User from '../@types/User';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent {
	@ViewChild('login', { static: false }) login!: ElementRef;

	menu: boolean = false;
	user: User | null = this.authService.getUserInfo() ? JSON.parse(this.authService.getUserInfo()!) : null;
	menuItems = [
		{ label: 'Inicio', path: '/' },
		{ label: 'Soporte', path: '/soporte' },
		{ label: 'Comandos', path: '/comandos' },
	];

	constructor(private authService: AuthService) {
		console.log('user', this.user);
		console.log('token', this.authService.getToken());
	}

	ngOnInit() {
		if (this.user == null) {
			console.log('No user object detected, fetching user for delayed-rendering');
			this.authService.getUserInfoObserver().subscribe({
				next: (user: User) => {
					if (!user.profile) return;
					if (!this.login) return;
					this.user = user;
					this.login.nativeElement.innerHTML = 'Perfil';
					this.login.nativeElement.href = '/perfil';
				},
			});
		}
	}
}
