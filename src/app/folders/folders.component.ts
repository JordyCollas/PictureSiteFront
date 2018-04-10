import { Component, OnInit } from '@angular/core';
import { PictureService } from '../services/picture/picture.service';
import { Router } from '@angular/router';
import { FolderWithPicture } from '../models/FolderWithPicture';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-pictures',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  constructor(private pictureService: PictureService, private router: Router) { }

  private allFolders: FolderWithPicture[];
  public pictures: string[];

  ngOnInit() {
    this.GetAllFolders();
  }

  GetAllFolders(){
    this.pictureService.GetAllFolders().subscribe(folders => this.allFolders = folders);
  }

  GetPicturesFromFolder(folder: string){
    this.router.navigate(['/pictures', {folderName: folder}])
  }

  GetPhoto(folder: FolderWithPicture){
   return 'data:image/png;base64,'+folder.image;
  }
}
