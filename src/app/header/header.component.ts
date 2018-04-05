import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  constructor(private router: Router, public authService: AuthenticationService) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.authService.isLoggedIn$;
  }
  
  Register(){
    this.router.navigate(['/register']); 
  }

  Login(){
    this.router.navigate(['/login']);
  }

  Logout(){
    this.authService.logout();
  }

}
