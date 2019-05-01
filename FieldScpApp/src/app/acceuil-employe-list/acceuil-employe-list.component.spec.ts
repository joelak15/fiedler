import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilEmployeListComponent } from './acceuil-employe-list.component';

describe('AcceuilEmployeListComponent', () => {
  let component: AcceuilEmployeListComponent;
  let fixture: ComponentFixture<AcceuilEmployeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilEmployeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilEmployeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
