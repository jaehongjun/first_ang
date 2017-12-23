import { Component, OnInit } from '@angular/core';
import { Depart } from './depart';
import { DepartService } from './depart.service'
import { last } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-depart',
  templateUrl: './depart.component.html',
  styleUrls: ['./depart.component.css'],
  providers:[DepartService],
})
export class DepartComponent implements OnInit {
  title:string = "부서정보";
  di:Depart;
  isShow : boolean = false;
  button:string = "테스트보기";
  diList: Array<Depart>=[];
  constructor(private dis: DepartService) {    
    this.di = new Depart();
    // dis.getDepartList();
    // this.di = new Depart();
    // this.di.dino = 1;
    // this.di.diname = "개발";
    // this.di.didesc = "부서";
    // this.di.dicnt = 1;    
    // console.log(this.di);
   }
  
  ngOnInit() {
  }
  adiDepart():void{
    this.dis.addDepart(this.di)
    this.di = new Depart();
    // this.diList.push(this.di);
    // this.di =  new Depart();
    // console.log(this.diList);
  }
  showDepartList():void{
    this.diList = this.dis.getDepartList()
  }
  changeShow():void{
    this.isShow = !this.isShow
    if(this.isShow){      
      this.button = "테스트보기"      
    }else {
      this.button = "테스트안보기"
    }
  }
  getFind(dino):number{
    let idx:number = -1;
    this.diList.forEach((di,index)=>{
      if(di.dino==dino){
        idx = index;
      }
    })    
    return idx;
  }
  diDelete(dino:number){
    let idx:number = this.getFind(dino);
    alert(idx);
    this.diList.splice(idx,1);
  }
}
