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
export class AuthenticationService  implements OnInit  {

    public isLoggedIn$: Subject<boolean>;

    constructor(private http: Http, private config: AppConfig, private router: Router) { 
        this.isLoggedIn$ = new Subject<boolean>();
    }
 
    ngOnInit(){ }

    isLoggedIn(): boolean {
        return !!(localStorage.getItem('currentUser'));
    }

    login(username: string, password: string) {
        return this.http.post(this.config.apiUrl + '/users/authenticate', { username: username, password: password })
            .map((response: Response) => {
                // login successful if there 's a jwt token in the response
                let user = response.json();
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.isLoggedIn$.next(true);
               }
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.isLoggedIn$.next(false);
        this.router.navigate(['/login']);
    }
}