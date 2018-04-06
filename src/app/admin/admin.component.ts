import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user/user.service';
import { User } from '../models/User';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private userservice: UserService) { }

  private users: Observable<User>;

  ngOnInit() {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.userservice.getAll().subscribe(users => this.users = users)
  }

  

}
