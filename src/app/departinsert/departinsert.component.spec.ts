import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartinsertComponent } from './departinsert.component';

describe('DepartinsertComponent', () => {
  let component: DepartinsertComponent;
  let fixture: ComponentFixture<DepartinsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartinsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartinsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
