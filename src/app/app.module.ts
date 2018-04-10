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
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './guards/admin.guard';
import { FoldersComponent } from './folders/folders.component';
import { PictureService } from './services/picture/picture.service';
import { PicturesComponent } from './pictures/pictures.component';


// @NgModule decorator with its metadata
@NgModule({
    declarations: [
        AppComponent, 
        AlertComponent,
        RegisterComponent, 
        RegisterSuccessComponent, 
        LoginComponent, 
        HomeComponent, 
        HeaderComponent, 
        AdminComponent, 
        FoldersComponent, 
        PicturesComponent
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
        PictureService,
        AuthGuard,
        AdminGuard],
    bootstrap: [AppComponent]
})
export class AppModule { }