import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {DepartService} from '../depart/depart.service'
import { Depart } from '../depart/depart';
import {DepartUpdateService} from './depart-update.service'
@Component({
  selector: 'app-depart-update',
  templateUrl: './depart-update.component.html',
  styleUrls: ['./depart-update.component.css'],
  providers:[DepartUpdateService],
})
export class DepartUpdateComponent implements OnInit {
  di:Depart;
  @Input() duDiNo:number;
  @Input() visible:boolean = true;
  @Output() childevisible = new EventEmitter<boolean>(); // boolean전달 이벤트
  @Output() openView = new EventEmitter<Depart>();
  constructor(private dus : DepartUpdateService) { }

  ngOnInit() {
    this.dus.getDepart(this.duDiNo).subscribe(
      res=>{
        console.log(res.json)
        this.di = res.json()[0];
      }
    )
  }
  close():void{
    this.visible = false;
    this.childevisible.emit(this.visible);
  }
  openViewGo(di:Depart):void{
    console.log('?',this.di)
    this.openView.emit(this.di)
    this.close();
  }

}
