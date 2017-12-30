import { Injectable } from '@angular/core';
import { Depart } from '../depart/depart';
import { Http,Response,Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DepartUpdateService {
  url:string = "http://localhost:3000/"
  constructor(protected _http:Http) { }


  updateDepartPost(di:Depart):Observable<any>{
    let url:string ="api/departs/update";
    return this._http.post(this.url+url,di);
  }
  getDepart(diNo:number):Observable<any>{
    let url:string ="api/departs/"+diNo;
    alert(url);
    return this._http.get(this.url+url);
  }
}
