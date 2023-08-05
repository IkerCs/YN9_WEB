import { Component } from '@angular/core';
import keys from 'src/keys';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.sass']
})
export class LoginComponent {
	join: boolean = true;

	login () {
		if (this.join) window.location.href = `${keys.YN9_API}/auth/login`;
		else window.location.href = `${keys.YN9_API}/auth/login-no-join`;
	}
}
