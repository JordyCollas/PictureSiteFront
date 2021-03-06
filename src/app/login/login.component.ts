import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from '../services/alert/alert.service';
import { AuthenticationService } from '../services/authentication/authentication.service';
 
 
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})
 
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 
    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
 
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }
 
    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigateByUrl(this.returnUrl);
                },
                error => {
                    console.log(error.json())
                    this.alertService.error(`Login or password are incorrect. If you forgot your password, you can change it by clicking the button "Forgot password?".
                      If you are sure about your Username, contact the administrator.`);
                    this.loading = false;
                });
    }
}