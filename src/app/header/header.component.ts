import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { PictureService } from '../services/picture/picture.service';
import { Picture } from '../models/Picture';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentFolder$: Observable<string>;
  constructor(private router: Router, private authService: AuthenticationService, private pictureService: PictureService) {}

  ngOnInit(): void {
    this.currentFolder$ = this.pictureService.currentFolder$;
  }
  

  Register(){
    this.router.navigate(['/register']); 
  }

  Folders(){
      this.router.navigate(['/folders'])
  }

  Login(){
    this.router.navigate(['/login']);
  }

  GoToAdmin(){
    this.router.navigate(['/admin'])
  }

  Logout(){
    this.authService.logout();
  }


}
