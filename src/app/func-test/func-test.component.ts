import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-func-test',
  templateUrl: './func-test.component.html',
  styleUrls: ['./func-test.component.css']
})
export class FuncTestComponent implements OnInit {
  title:string="함수 테스트";
  constructor() { }

  ngOnInit() {
  }
  funcTest1():void{
    test(this.title);
    let title = this.title;
    function test(title:string):void{
      alert(title);
    }
  }
  funcTest2():void{   
    let title = this.title; 
    let test = function():void{
      alert(title);
    }
    try{
      test();
    }catch(e){
      alert(e);
    }
    
  }
  // bind
  funcTest3():void{
    let test = function():void{
      alert(this.title);
    }
    // test();
    test.bind(this)();
  }
  // call
  funcTest4():void{
    let test = function():void{
      alert(this.title);
    }
    // test();
    test.call(this);
  }

  funcTest5():void{
    let test = ()=>{
      alert(this.title)
    }
    test();
  }










  funcTest300():void{
    let test;
    try{
      test();      
    }catch(e){
        alert(e);      
    }finally{
      test = function(){
        alert(1)
      }
    }
    test();
  }
}
