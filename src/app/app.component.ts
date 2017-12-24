import { Component } from '@angular/core';
import {User} from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  user : User;
  userList:Array<User> = [];
  
  userName : string = "";
  userAge :number = 0;

constructor(){ // onload와 유사 (생성자)
  this.user = new User();
  this.user.userId = "test";
  this.user.userName = "jeon"
  sessionStorage.setItem("user",JSON.stringify(this.user));
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
}
