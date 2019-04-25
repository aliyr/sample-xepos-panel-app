import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CompanyDetailsComponent } from "./company-details.component";
import {RouterTestingModule} from '@angular/router/testing';

describe("CompanyDetailsComponent", () => {
  let component: CompanyDetailsComponent;
  let fixture: ComponentFixture<CompanyDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDetailsComponent],
      imports: [
        RouterTestingModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
