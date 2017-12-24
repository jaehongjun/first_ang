import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncTestComponent } from './func-test.component';

describe('FuncTestComponent', () => {
  let component: FuncTestComponent;
  let fixture: ComponentFixture<FuncTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
