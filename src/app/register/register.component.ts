import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user/user.service';
import { AlertService } from '../services/alert/alert.service';
 
 
@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})
 
export class RegisterComponent {
    model: any = {};
    loading = false;
 
    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }
 
    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    this.alertService.success('Registration successful', false);
                    this.router.navigate(['/registerSuccess']);
                },
                error => {
                    this.alertService.error(error._body);
                    this.loading = false;
                });
    }
}