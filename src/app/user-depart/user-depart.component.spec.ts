import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDepartComponent } from './user-depart.component';

describe('UserDepartComponent', () => {
  let component: UserDepartComponent;
  let fixture: ComponentFixture<UserDepartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDepartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDepartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
