import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CompanyDetailsWizardComponent } from "./company-details-wizard.component";

describe("CompanyDetailsWizardComponent", () => {
  let component: CompanyDetailsWizardComponent;
  let fixture: ComponentFixture<CompanyDetailsWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDetailsWizardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetailsWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
