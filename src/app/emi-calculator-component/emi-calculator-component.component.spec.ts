import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmiCalculatorComponentComponent } from './emi-calculator-component.component';

describe('EmiCalculatorComponentComponent', () => {
  let component: EmiCalculatorComponentComponent;
  let fixture: ComponentFixture<EmiCalculatorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmiCalculatorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmiCalculatorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
