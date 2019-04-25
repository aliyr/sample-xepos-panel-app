import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavComponent } from './sub-nav.component';
import {MatIconModule, MatTreeModule} from '@angular/material';
import {RouterTestingModule} from '@angular/router/testing';

describe('SubNavComponent', () => {
  let component: SubNavComponent;
  let fixture: ComponentFixture<SubNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubNavComponent ],
      imports: [
        MatTreeModule,
        RouterTestingModule,
        MatIconModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
