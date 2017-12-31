import { Injectable } from '@angular/core';
import { Http,Response,Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import {UserDepart} from './userDepart'
@Injectable()
export class UserDepartService {

  url:string = "http://localhost:3000/"
  UDList: Array<UserDepart>=[];
  private headers = new Headers();
  constructor(protected _http:Http) {     
    this.headers.append('Content-Type',"application/json; charset=utf-8");
    this.headers.append('Accept',"application/json; charset=utf-8");
    console.log("누군가는 부서생성자를 호출합니다.")
  }  
  getJointList():Observable<any>{
    let url:string ="api/userdeparts/";
    return this._http.get(this.url+url);
  }
  deleteJoin(userno:number):Observable<any>{
    let url:string = "api/userdeparts/"+userno;
    return this._http.delete(this.url + url);
  }
  selectBox():Observable<any>{
    let url:string='api/userdeparts/select/';
    return this._http.get(this.url + url);
  }
  udModify(UDList:UserDepart):Observable<any>{
    let url:string='api/userdeparts/';
    return this._http.post(this.url+url,UDList)
  }
}
