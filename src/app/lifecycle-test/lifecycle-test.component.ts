import { Component, OnInit, OnDestroy,OnChanges,SimpleChange,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lifecycle-test',
  templateUrl: './lifecycle-test.component.html',
  styleUrls: ['./lifecycle-test.component.css']
})
export class LifecycleTestComponent implements OnInit,OnDestroy,OnChanges {
  @Input() title:string;
  @Output()childeVisible = new EventEmitter<boolean>();
  seq:number = 1;
  constructor() {
    console.log('클래스 초기화'+this.seq++)
   }

  ngOnInit() {
    console.log('컴포넌트 초기화')
  }
  ngOnDestroy(){
    console.log('컴포넌트 종료'+this.seq++);    
  }
  ngOnChanges(changes:{[propertyName:string]:SimpleChange}){
    console.log("값이 바뀔때" + this.seq++);
    for(let pName in changes){
      let chng = changes[pName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`${pName}:currentValue = ${cur}, previousValue = ${prev}`);      
    }    
  }
  viewChange(b:boolean){
    // 부모한테 쏘는거
    this.childeVisible.emit(b);
  }
  // $event emit(b)의 값을 받음
}
