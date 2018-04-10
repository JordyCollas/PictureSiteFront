import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture/picture.service';
import {Router, ActivatedRoute} from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  private folderName: string;
  private pictures: Observable<string>;
  private sub: any;

  constructor(private pictureService: PictureService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.folderName = params['folderName'];
    });

  } 

  ngOnInit() {
    
    this.pictures = this.pictureService.GetAllPicturesFromFolder(this.folderName);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
