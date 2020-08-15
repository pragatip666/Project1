import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligibilityCalculatorComponentComponent } from './eligibility-calculator-component.component';

describe('EligibilityCalculatorComponentComponent', () => {
  let component: EligibilityCalculatorComponentComponent;
  let fixture: ComponentFixture<EligibilityCalculatorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligibilityCalculatorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligibilityCalculatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
