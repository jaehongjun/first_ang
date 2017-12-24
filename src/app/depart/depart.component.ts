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
  visible :boolean = false;
  subTitle:string = this.title;
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
  adiDepart(di:Depart):void{
    // subscribe = 데이터를 풀어주는 역할
    this.dis.addDepart(di).subscribe(
      datas =>{
        // json주고 받는다.
        let result = datas.json();
        this.di = result.di;
      }
    )
    // console.log(JSON.stringify(di))
    // this.dis.addDepart(di)
    // this.di = new Depart();    
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
  toggleDepartInsert(v:boolean){
    console.log(v);
    this.visible = v;
  }
  childDi(di:Depart){
    console.log('childDi');
    console.log(JSON.stringify(di))
    this.adiDepart(di);
  }
  childevisible(){
    this.visible = false;
  }
}
