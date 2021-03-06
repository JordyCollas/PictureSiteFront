import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';
import { AlertService } from '../services/alert/alert.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userService: UserService, private alertService: AlertService, private router: Router) { }

  private users: Observable<User>;
    private changedUsers: User[] = [];
  
  ngOnInit() {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.userService.getAll().subscribe(users => this.users = users)
  }

  private AddToChanged(user: User){
    if(this.changedUsers.findIndex(x => x.userName === user.userName) === -1){
      this.changedUsers.push(user);
    }
  }

  private save(){
    this.userService.Update(this.changedUsers)
    .subscribe(
        data => {
            this.alertService.success('Update successful', false);
            this.router.navigate(['/admin']);
        },
        error => {
            this.alertService.error(error._body);
        });
  }

}
