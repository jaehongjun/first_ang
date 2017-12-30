import { Injectable } from '@angular/core';
import { Depart } from './depart';
import { Http,Response,Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
@Injectable()
export class DepartService {
  url:string = "http://localhost:3000/"
  diList: Array<Depart>=[];
  private headers = new Headers();
  constructor(protected _http:Http) {     
    this.headers.append('Content-Type',"application/json; charset=utf-8");
    this.headers.append('Accept',"application/json; charset=utf-8");
    console.log("누군가는 부서생성자를 호출합니다.")
  }  
  addDepart(di:Depart):Observable<any>{
    let url:string="api/depart?name=test&diName=ditest"
    this.diList.push(di);
    return this._http.get(this.url+url)
  }
  getDepartList(diNo:string):Observable<any>{
    let url:string ="api/departs/"+diNo;
    return this._http.get(this.url+url);
  }
  addDepartPost(di:Depart):Observable<any>{
    let url:string ="api/departs/";
    return this._http.post(this.url+url,di);
  }
  deleteDepart(diNo:string):Observable<any>{
    let url:string ="api/departs/"+diNo;
    return this._http.delete(this.url+url);
  }
}
