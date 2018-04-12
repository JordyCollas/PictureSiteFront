import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture/picture.service';
import { Router } from '@angular/router';
import { FolderWithPicture } from '../models/FolderWithPicture';
import { DomSanitizer } from '@angular/platform-browser';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-pictures',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  constructor(private pictureService: PictureService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

  private allFolders: FolderWithPicture[];
  public pictures: string[];

  ngOnInit() {
    this.spinnerService.show();
    this.GetAllFolders();
  }

  GetAllFolders(){
    this.pictureService.GetAllFolders().subscribe(folders => this.allFolders = folders,null, () => this.spinnerService.hide());
  }

  GetPicturesFromFolder(folder: string){
    this.router.navigate(['/pictures', {folderName: folder+"_Cropped"}])
  }

  GetPhoto(folder: FolderWithPicture){
   return 'data:image/png;base64,'+folder.image;
  }
}
