import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/observable/of';

import { AppConfig } from '../../app.config';
import { Observer } from 'rxjs/Observer';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable()
export class AuthenticationService  {
    constructor(private http: Http, private config: AppConfig, private router: Router) { 
    }
 
    isLoggedIn(): boolean {
        return !!(localStorage.getItem('currentUser'));
    }

    isAdmin(): boolean {
        if(!(localStorage.getItem('currentUser'))){
            return false;
        }
        var user = JSON.parse(localStorage.getItem('currentUser'));     
        return user["isAdmin"] === true;
    }

    login(username: string, password: string) {
        return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there 's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
               }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }
}