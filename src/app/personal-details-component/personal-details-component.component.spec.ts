import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsComponentComponent } from './personal-details-component.component';

describe('PersonalDetailsComponentComponent', () => {
  let component: PersonalDetailsComponentComponent;
  let fixture: ComponentFixture<PersonalDetailsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalDetailsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
