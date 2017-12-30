import { Component, OnInit } from '@angular/core';
import { ProLog } from './promise'

import { reject } from 'q';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() {  
    this.title="프라미스 테스트";
    this.proLogList = [];
    this.setLog("테스트") 
  }
  title: string; 
  proLogList : Array<ProLog>;

  
  setLog(text:string){
    let log:ProLog = new ProLog();
    log.num =  this.proLogList.length;
    log.text = text;
    this.proLogList.push(log)
  }
  setTime(text:string,time:number,func?:Function):void{
    setTimeout(()=>{
      this.setLog(text)
    },time);
    if(func){
      func();
    }
  
  }
  logTest():void{
    let test1 = ():void=>{
      this.setTime('첫번쨰',2000)
    }

    let test2 = ():void=>{
      this.setTime('두번쨰',1000)
    }

    let test3 = ():void=>{
      this.setTime('세번쨰',500)
    }

    test1();
    test2();
    test3();
  }
  logTest2():void{
    this.proLogList = [];
    let test1=(func:Function):void=>{
      this.setTime('첳번째',2000,func);
    }
    let test2=(func:Function):void=>{
      this.setTime('두번째',1500,func);
    }
    let test3 = ():void=>{
      this.setTime('세번쨰',500);
    }
    test1(test2);
    test1(test2.bind(null,test3));
  }

  // logTest3():void{
  //   let test1 = new Promise((resolve,rejected)=>{
  //     setTimeout(()=>{
  //       this.setLog("test1")
  //     },2000)
  //   });
  //   test1().then();
  // }
  getPromise(text:string,time:number,msg?:string):Promise<{}>{
    return new Promise((resolveed,rejected)=>{
      setTimeout(()=>{
        if(msg){
          rejected(msg);
        }else{
          this.setLog(text);
          resolveed();
        }
      },time);
    })
  }
  logTest3():void{
    this.proLogList = [];
    let test1 = this.getPromise.bind(this,'첫번째',1500)
    let test2 = this.getPromise.bind(this,'두번째',500)
    let test3 = this.getPromise.bind(this,'세번째',1000,'에러발생')
    test1().
    then(test2).
    then(test3).
    then(()=>{
      this.setLog("모두 완료입니다.");
    }).catch(
      (msg:string)=>{
        this.setLog(msg);
      }
    )
  }
  ngOnInit() {
  }

}
