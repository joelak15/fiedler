import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeAcceuilTemplateComponent } from './employe-acceuil-template.component';

describe('EmployeAcceuilTemplateComponent', () => {
  let component: EmployeAcceuilTemplateComponent;
  let fixture: ComponentFixture<EmployeAcceuilTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeAcceuilTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeAcceuilTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
