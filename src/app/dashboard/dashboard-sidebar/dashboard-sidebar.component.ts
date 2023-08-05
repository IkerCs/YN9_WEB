import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-dashboard-sidebar',
	templateUrl: './dashboard-sidebar.component.html',
	styleUrls: ['./dashboard-sidebar.component.sass']
})
export class DashboardSidebarComponent {
	id: string | null = this.route.snapshot.paramMap.get('id');

	sidebar = [
		{ name: 'Inicio', icon: 'home-alt', route: '/' },
		{ name: 'Auto-Mod', icon: 'check-shield', route: '/automod' },
		{ name: 'Movimientos', icon: 'door-open', route: '/movimientos' },
		{ name: 'Logs', icon: 'clipboard', route: '/logs' },
		{ name: 'Ignorar', icon: 'lock-alt', route: '/ignore' },
		{ name: 'Comandos', icon: 'terminal', route: '/comandos' },
	];

	constructor (private route: ActivatedRoute) { }
}
