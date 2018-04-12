import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture/picture.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Picture } from '../models/Picture';
import { DomSanitizer } from '@angular/platform-browser';
import { InfiniteScrollModule } from 'angular2-infinite-scroll/src';

@Component({
  selector: 'app-pictures',
  templateUrl: './pictures.component.html',
  styleUrls: ['./pictures.component.css']
})
export class PicturesComponent implements OnInit {

  private folderName: string;
  private pictures: Picture[];
  private sub: any;
  private index = 0;
  private imageStrings: string[] = [];
  private indexAddition = 15;


  constructor(private pictureService: PictureService, private route: ActivatedRoute, private scrollModule: InfiniteScrollModule) {
    this.sub = this.route.params.subscribe(params => {
      this.folderName = params['folderName'];
    });
  }

  ngOnInit() {
    this.pictureService.GetAllPicturesFromFolder(this.folderName).subscribe(pictures => this.pictures = pictures, null, () => this.onScroll());
  }

  ConvertToimage(image: Uint8Array) {
    return 'data:image/png;base64,' + image;
  }

  onScroll() {
    var amountPictures = this.pictures.length;

    if (this.index === amountPictures) {
      return;
    }

    if (this.index + this.indexAddition > amountPictures) {
      this.indexAddition = amountPictures - this.index;
    }

    for (var i = this.index; i < this.index + this.indexAddition; i++) {
      this.imageStrings.push(this.ConvertToimage(this.pictures[i].image))
    }
    this.index = this.index + this.indexAddition;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
