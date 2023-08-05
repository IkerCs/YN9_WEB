import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './auth/login/login.component';
import { Oauth2Component } from './auth/oauth2/oauth2.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './dashboard/main/main.component';
import { AutomodComponent } from './dashboard/automod/automod.component';
import { MovimientosComponent } from './dashboard/movimientos/movimientos.component';
import { LogsComponent } from './dashboard/logs/logs.component';
import { IgnoreComponent } from './dashboard/ignore/ignore.component';
import { ComandosComponent } from './dashboard/comandos/comandos.component';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		NavbarComponent,
		LoginComponent,
		Oauth2Component,
		ProfileComponent,
		LogoutComponent,
		FooterComponent,
		MainComponent,
		AutomodComponent,
		MovimientosComponent,
		LogsComponent,
		IgnoreComponent,
		ComandosComponent,
		DashboardSidebarComponent,
	],
	imports: [
		BrowserModule,
		FormsModule,
		AppRoutingModule,
		HttpClientModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
