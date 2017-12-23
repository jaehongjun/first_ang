import { Component, OnInit } from '@angular/core';
import { User } from './user'
//import { UserHis } from './user-his';
import { UserDataService } from './user-data.service';
import { error } from 'util';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserDataService],
})

export class UserComponent implements OnInit {
  userList:Array<User>=[];
  searchUser:User = new User();
  errorMsg:string ="";
  addUserObj:User = new User();
  ngOnInit() {
  }
  addUser():void{
    console.log(this.addUserObj);
    this.uds.addUser(this.addUserObj).subscribe;
  //  this.addUserObj = new User();
  //  this.addUserObj.userId = "test";
  //  this.addUserObj.userName = "test";
  //  this.addUserObj.userNo = 3;
  //  this.addUserObj.userPwd = "test";
  //  this.addUserObj.complete = true;
  //  this.userList.push(this.addUserObj);
  }
  constructor(private uds:UserDataService) { 
    //this.getUsers();
  }

    getUsers():void{
    this.uds.getUsers(this.searchUser).subscribe(
      datas => {
        console.log(datas);
        this.userList = datas["list"];
      },
      error =>{
        this.errorMsg = <any>error;
        alert(this.errorMsg);
      }
    )
  }

}
