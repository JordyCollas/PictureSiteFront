import { Injectable } from '@angular/core';
import { Http,Headers, RequestOptions, Response } from '@angular/http';
import { AppConfig } from '../../app.config';
import { Folder } from '../../models/Folder';

@Injectable()
export class PictureService {

  constructor(private http: Http, private config: AppConfig) { }


  GetAllFolders(){
    return this.http.get(this.config.apiUrl + '/pictures', this.jwt()).map((response: Response) => response.json());    
  }

  GetAllPicturesFromFolder(folderName: string){
    let getAllPicturesFromFolder = new Folder();
    getAllPicturesFromFolder.folderName = folderName;

    return this.http.post(this.config.apiUrl + '/pictures/',getAllPicturesFromFolder , this.jwt()).map((response: Response) => response.json());    
    
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
