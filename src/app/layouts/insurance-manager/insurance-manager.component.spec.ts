import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceManagerComponent } from './insurance-manager.component';

describe('InsuranceManagerComponent', () => {
  let component: InsuranceManagerComponent;
  let fixture: ComponentFixture<InsuranceManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsuranceManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsuranceManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
