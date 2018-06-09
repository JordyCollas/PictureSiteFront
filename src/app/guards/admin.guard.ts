import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Injectable()
export class AdminGuard implements CanActivate {

    constructor(private router: Router, private userService: UserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var user = JSON.parse(localStorage.getItem('currentUser'));

        if(this.userService.IsUserAdmin()){
            return true;
        }

        this.router.navigate(['/login'], { queryParams: { returnUrl: '/' } });
        return false;
    }
}