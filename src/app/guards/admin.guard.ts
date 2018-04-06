import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
 
@Injectable()
export class AdminGuard implements CanActivate {
 
    constructor(private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
       var user = JSON.parse(localStorage.getItem('currentUser'));
           
            if(user["isAdmin"] === true){
                return true;
            }

            this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
            return false;       
    }
}