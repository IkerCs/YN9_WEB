import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { Oauth2Component } from './auth/oauth2/oauth2.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './auth/logout/logout.component';

import { MainComponent } from './dashboard/main/main.component';
import { AutomodComponent } from './dashboard/automod/automod.component';
import { MovimientosComponent } from './dashboard/movimientos/movimientos.component';
import { LogsComponent } from './dashboard/logs/logs.component';
import { IgnoreComponent } from './dashboard/ignore/ignore.component';
import { ComandosComponent } from './dashboard/comandos/comandos.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'oauth2', component: Oauth2Component },
	{ path: 'oauth2/login', component: LoginComponent},
	{ path: 'oauth2/logout', component: LogoutComponent},
	{ path: 'dashboard/@me', component: ProfileComponent},
	{ path: 'dashboard/:id', component: MainComponent },
	{ path: 'dashboard/:id/logs', component: LogsComponent },
	{ path: 'dashboard/:id:/ignore', component: IgnoreComponent },
	{ path: 'dashboard/:id/automod', component: AutomodComponent },
	{ path: 'dashboard/:id/comandos', component: ComandosComponent },
	{ path: 'dashboard/:id/movimientos', component: MovimientosComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
