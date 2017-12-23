import { Component, OnInit } from '@angular/core';
import { Test } from './test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tt:Test;
  
  test:string = "테스트 컴포넌트 입니다.";
  constructor() { 
    this.tt = new Test();
    this.tt.name = "홍길동";
    this.tt.title = "테스트 컴포넌트이다.";
    console.log(this.test);
  }
  
  ngOnInit() {
  }
  
  changeTitle():void{
    this.tt.title="바뀐 테스트 컴포넌트";
  }
}
