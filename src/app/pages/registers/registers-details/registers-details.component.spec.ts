import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersDetailsComponent } from './registers-details.component';

describe('RegistersDetailsComponent', () => {
  let component: RegistersDetailsComponent;
  let fixture: ComponentFixture<RegistersDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistersDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
