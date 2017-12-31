import { Component, OnInit } from '@angular/core';
import {UserDepartService} from './user-depart.service';
import {UserDepart} from './userDepart';
import {Depart} from '../depart/depart';
@Component({
  selector: 'app-user-depart',
  templateUrl: './user-depart.component.html',
  styleUrls: ['./user-depart.component.css'],
  providers:[UserDepartService]
})
export class UserDepartComponent implements OnInit {  
  UDList: Array<UserDepart>=[];
  diList: Array<Depart>=[];
  diname:string;
  username:string = '';
  constructor(private ud: UserDepartService) {
   }

  ngOnInit() {
    this.selectBox();
  }
  showDepartList():void{
    // alert(this.diNo);
    this.ud.getJointList().subscribe(
      datas => {
        console.log(datas.json());
        this.UDList = datas.json();
      }
    )
    //this.diList = this.dis.getDepartList()
  }
  diDelete(userno:number) {
    this.ud.deleteJoin(userno).subscribe(
      res => {
        console.log(res.json());  
        var result = res.json();
        if(result.succeed=='OK'){
          alert('성공')    
          this.showDepartList();
        }else{
          alert('실패')
        }      
      }
    )
  }
  udModify(UDList:UserDepart){
    console.log(UDList);
    this.ud.udModify(UDList).subscribe(
      res=>{        
        console.log(res.json());
        var result = res.json();
        if(result.succeed=='OK'){
          alert('성공')          
          this.showDepartList();
        }else{
          alert('실패')
        }
      }
    )
  }
  selectBox(){
    this.ud.selectBox().subscribe(
      datas => {
        console.log(datas.json());
        this.diList = datas.json();                
      }
    )   
  }
}
