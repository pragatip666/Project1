import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanDetailsComponentComponent } from './loan-details-component.component';

describe('LoanDetailsComponentComponent', () => {
  let component: LoanDetailsComponentComponent;
  let fixture: ComponentFixture<LoanDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
