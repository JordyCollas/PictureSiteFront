import { Injectable, OnInit } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseContentType } from '@angular/http';
import { AppConfig } from '../../app.config';
import { Folder } from '../../models/Folder';
import { Subject } from 'rxjs';
import { PictureToDownload } from '../../models/PictureToDownload';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PictureService implements OnInit {

  public currentFolder$: Subject<string>;

  constructor(private http: Http, private config: AppConfig) {
    this.currentFolder$ = new Subject<string>();
  }

  ngOnInit() {
    this.currentFolder$.next("");
  }

  GetAllFolders() {
    return this.http.get(this.config.apiUrl + '/pictures', this.jwt()).map((response: Response) => response.json());
  }

  GetAllPicturesFromFolder(folderName: string) {
    let getAllPicturesFromFolder = new Folder();
    getAllPicturesFromFolder.folderName = folderName;

    this.currentFolder$.next(folderName.replace("_Cropped", ""));

    return this.http.post(this.config.apiUrl + '/pictures/getAllPicturesFromFolder', getAllPicturesFromFolder, this.jwt()).map((response: Response) => response.json());

  }

  DownloadPicture(folderName: string, pictureName: string):Observable<Blob> {
    let pictureToDownload = new PictureToDownload();
    pictureToDownload.folderName = folderName;
    pictureToDownload.pictureName = pictureName;
   
    let headers = this.jwt()
    headers.responseType = ResponseContentType.Blob

    return this.http.post(this.config.apiUrl + '/pictures/download', pictureToDownload, headers).map((response: Response) => <Blob>response.blob());
  }

  ngOnDestroy() {
    this.currentFolder$.next("");
  }

  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
