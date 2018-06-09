import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var user = JSON.parse(localStorage.getItem('currentUser'));

        if(this.authService.IsUserAdmin()){
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: '/' } });
        return false;
    }
}