import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { visitValue } from '@angular/compiler/src/util';
import {Depart} from '../depart/depart'
@Component({
  selector: 'app-departinsert',
  templateUrl: './departinsert.component.html',
  styleUrls: ['./departinsert.component.css']
})
export class DepartinsertComponent implements OnInit {
@Input() visible:boolean = true;
@Input() title :string;
// 부모한테 전달하는 데이터 타입
@Output() childevisible = new EventEmitter<boolean>(); // boolean전달 이벤트
@Output() childDi = new EventEmitter<Depart>();
di : Depart;
  constructor() { 
    this.di = new Depart();
  }
  ngOnInit() {
  }
  close():void{
    this.visible = false;
    this.childevisible.emit(this.visible);
  }
  addDepart():void{
    console.log(this.di)
    this.childDi.emit(this.di)
    this.close();
  }
}
