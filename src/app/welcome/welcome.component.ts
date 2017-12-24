import { Component, OnInit } from '@angular/core';
import { User } from '../user/user'
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user:User;
  constructor() { 
    let userStr = sessionStorage.getItem("user");
    this.user = JSON.parse(userStr);
  }

  ngOnInit() {
  }

}
