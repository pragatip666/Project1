import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeDetailsComponentComponent } from './income-details-component.component';

describe('IncomeDetailsComponentComponent', () => {
  let component: IncomeDetailsComponentComponent;
  let fixture: ComponentFixture<IncomeDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomeDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
