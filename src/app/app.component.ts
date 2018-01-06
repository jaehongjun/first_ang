import { Component } from '@angular/core';
import {User} from './user';
import { Http,Response,Headers } from '@angular/http'
import { Observable } from 'rxjs/Observable';
import {RouterLink} from '../app/router-link'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user : User;
  rlList : Array<RouterLink>=[];
  userList:Array<User> = [];
  url:string = "http://localhost:3000/"
  userName : string = "";
  userAge :number = 0;

constructor(protected _http:Http){ // onload와 유사 (생성자)
  this.user = new User();
  this.user.userId = "test";
  this.user.userName = "jeon"
  sessionStorage.setItem("user",JSON.stringify(this.user));
  this.getMenuList().subscribe(
    res=>{
      this.rlList = res.json().list;
      console.log(this.rlList);
    }
  );
}
  addUser() : void{
    var user:User = new User();
    user.userName = this.userName;
    user.userAge = this.userAge;
    this.userList.push(user);
    //alert(this.userName + this.userAge);
  }
  test() : void{    
    var user1:User = new User();
    user1.userName = "동동이";
    user1.userAge = 3;
    this.userList.push(user1);
    var user1:User = new User();
    user1.userName = "쌍둥이";
    user1.userAge = 6;
    this.userList.push(user1);
    }

    getMenuList():Observable<any>{
      let url:string ="api/menus/";
      console.log(url);
      return this._http.get(this.url+url);
    }
}
