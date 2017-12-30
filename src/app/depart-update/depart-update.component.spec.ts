import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartUpdateComponent } from './depart-update.component';

describe('DepartUpdateComponent', () => {
  let component: DepartUpdateComponent;
  let fixture: ComponentFixture<DepartUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
