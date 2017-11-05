import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ApiService {
  
  constructor(private http:Http) {}

  public getPosts() {
    return this.http.get('shared/posts.json')
    .map((response:Response)=>response.json())
    .catch((error:any) =>{return Observable.throw(error)});
  }
}
