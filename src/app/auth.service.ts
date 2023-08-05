/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import User from './@types/User';
import keys from 'src/keys';

@Injectable({
	providedIn: 'root'
})
export class AuthService {
	private tokenKey: string = 'accessToken';

	constructor(private http: HttpClient) { }

	public isAuthenticated(): boolean {
		const token = this.getToken();
		return token ? true : false;
	}

	public getToken(): string | null {
		return localStorage.getItem(this.tokenKey);
	}
	public setToken(token: string): void {
		localStorage.setItem(this.tokenKey, token);
	}
	public removeToken(): void {
		localStorage.removeItem(this.tokenKey);
		localStorage.removeItem('user');
		localStorage.removeItem('guilds');
	}



	getUserInfo(): string | null {
		if (localStorage.getItem('user')) return localStorage.getItem('user');
		if (this.getToken() == null) return null;
		const headers = new HttpHeaders().set('Authorization', `${this.getToken()}`);
		this.http.get<any>(`${keys.YN9_API}/users/`, { headers }).subscribe({
			next: (user) => {
				localStorage.setItem('user', JSON.stringify(user));
			},
			error: (err: Error) => console.log(err),
		});
		return localStorage.getItem('user');
	}
	getUserInfoObserver(): Observable<User> {
		const headers = new HttpHeaders().set('Authorization', `${this.getToken()}`);
		return this.http.get<any>(`${keys.YN9_API}/users/`, { headers });
	}
}
