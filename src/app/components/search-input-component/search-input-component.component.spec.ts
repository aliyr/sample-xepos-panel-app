import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputComponentComponent } from './search-input-component.component';

describe('SearchInputComponentComponent', () => {
  let component: SearchInputComponentComponent;
  let fixture: ComponentFixture<SearchInputComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchInputComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
