import { Component, OnInit } from '@angular/core';
import { ResetPasswordRequest } from '../../models/RequestResetPassword';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user/user.service';
import { AlertService } from '../../services/alert/alert.service';

@Component({
  templateUrl: './forgot-password.component.html'
})

export class ForgotPasswordComponent implements OnInit {
  model = new  ResetPasswordRequest();
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.returnUrl = 'mailSent';
  }

  requestResetPassword() {
    this.loading = true;
    this.userService.RequestResetPassword(this.model)
        .subscribe(
            data => {
                this.router.navigateByUrl(this.returnUrl);
            },
            error => {
                this.alertService.error(error._body);
                this.loading = false;
            });
}

}
