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
  diNo:string ="";
  isShow : boolean = false;
  button:string = "테스트보기";
  diList: Array<Depart>=[];
  visible :boolean = false;
  upVisible:boolean = false;
  subTitle:string = this.title;
  duDiNo:number;
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
  // adiDepart(di:Depart):void{
  //   // subscribe = 데이터를 풀어주는 역할
  //   this.dis.addDepart(di).subscribe(
  //     datas =>{
  //       // json주고 받는다.
  //       let result = datas.json();
  //       this.di = result.di;
  //     }
  //   )
  //   // console.log(JSON.stringify(di))
  //   // this.dis.addDepart(di)
  //   // this.di = new Depart();    
  // }
  
  showDepartList():void{
    // alert(this.diNo);
    this.dis.getDepartList(this.diNo).subscribe(
      datas => {
        console.log(datas.json());
        this.diList = datas.json();
      }
    )
    //this.diList = this.dis.getDepartList()
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
  diDelete(dino:string){
    // let idx:number = this.getFind(dino);
    // alert(idx);
    // this.diList.splice(idx,1);
    this.dis.deleteDepart(dino).subscribe(
      datas => {
        let result = datas.json();      
        if(result.error){
          alert(result.error.msg);
        }else{
          alert("정상적으로 삭제 되었습니다.")
          this.showDepartList();
        }
        // // 내가 코딩한거
        // if(result.succeed=="OK"){
        //   alert("부서삭제가 정상적으로 성공하였습니다.");
        //   this.showDepartList();
        // }else{
        //   alert("부서삭제가 실패하였습니다.")
        // }        
      }
    )
  }
  toggleDepartInsert(v:boolean){
    console.log(v);
    this.visible = v;
  }
  childDi(di:Depart){
    console.log('childDi');
    console.log(JSON.stringify(di))
    this.addDepart(di);
  }
  childevisible(){
    this.visible = false;
  }
  addDepart(di:Depart):void{
    this.dis.addDepartPost(di).subscribe(
      datas => {
        let result = datas.json();
        if(result.succeed=="OK"){
          alert("부서추가가 정상적으로 성공하였습니다.");
          this.showDepartList();
        }else{
          alert("부서추가가 실패하였습니다.")
        }
        }      
    )
  }
  openView(di:Depart):void{   
    this.duDiNo = di.dino;     
    this.upVisible = true;
    console.log(di);

  }
}
