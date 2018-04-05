// imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { RegisterComponent } from './register/register.component';
import { RegisterSuccessComponent } from './register/register-success/register-success.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { Routing } from './app.routing';
import { AlertComponent } from './alert/alert.component';
import { AppConfig } from './app.config';
import { AlertService } from './services/alert/alert.service';
import { UserService } from './services/user/user.service';
import { AuthGuard } from './guards/auth.guard';


// @NgModule decorator with its metadata
@NgModule({
    declarations: [
        AppComponent, 
        AlertComponent,
        RegisterComponent, 
        RegisterSuccessComponent, 
        LoginComponent, 
        HomeComponent, 
        HeaderComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        Routing
    ],
    providers: [
        AppConfig, 
        AuthenticationService, 
        AlertService, 
        UserService, 
        AuthGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }