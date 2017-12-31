import { Component, OnInit, DoCheck,AfterContentInit,AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  visible : boolean;
  titile:string  = "컴포넌트 테스트";
  subTitle:string ="자식 컴포넌트"
  constructor() { }

  ngOnInit() {
      console.log("부모 컴포넌트 초기시 실행");
      this.visible = false;
  }
  chVisible(b:boolean) {
    this.visible = b;
  }
  ngDoCheck(){
    console.log(this.visible);
  }
  ngAfterViewInit(){
    console.log('부모 한번 실행');
  }
  ngAfterViewChecked(){
    console.log('부모 값 변화시 매번 실행')
  }

}
