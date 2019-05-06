import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PointageEmployeComponent } from './pointage-employe.component';

describe('PointageEmployeComponent', () => {
  let component: PointageEmployeComponent;
  let fixture: ComponentFixture<PointageEmployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PointageEmployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PointageEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
