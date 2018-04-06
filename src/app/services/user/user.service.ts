import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
 
import { AppConfig } from '../../app.config';
import { User } from '../../models/User';  
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserService {
    constructor(private http: Http, private config: AppConfig) { }
 
    getAll() {
        return this.http.get(this.config.apiUrl + '/users', this.jwt()).map((response: Response) => response.json());
    }
 
    getById(id: string) {
        return this.http.get(this.config.apiUrl + '/users/' + id, this.jwt()).map((response: Response) => response.json());
    }
 
    create(user: User) {
        return this.http.post(this.config.apiUrl + '/users/register', user, this.jwt());
    }

    Update(users: Observable<User>){
        return this.http.post(this.config.apiUrl + '/users/update', users, this.jwt());
    }
    // private helper methods
 
    private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}