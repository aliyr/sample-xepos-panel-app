import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CompanyDetailsListComponent } from "./company-details-list.component";

describe("CompanyDetailsListComponent", () => {
  let component: CompanyDetailsListComponent;
  let fixture: ComponentFixture<CompanyDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDetailsListComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
