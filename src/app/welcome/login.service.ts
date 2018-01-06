import { Injectable } from '@angular/core';
import {CommonServiceService} from '../common/common-service.service'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import {User} from'../user/user';

@Injectable()
export class LoginService extends CommonServiceService{
  private loginUrl:string="http://localhost:3000/api/userdeparts/login";
//ng g s Login
  constructor(protected _http:Http) {
    super(_http);
  }
  
  login(u:User): Observable<User[]> {
    let paramStr:string  = '?userId=' + u.userId +'&userPwd=' + u.userPwd;
    return super.getJson(this.loginUrl+paramStr);
  }
}
