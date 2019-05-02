import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CompanyManagementWizardComponent } from "./company-management-wizard.component";

describe("CompanyManagementWizardComponent", () => {
  let component: CompanyManagementWizardComponent;
  let fixture: ComponentFixture<CompanyManagementWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyManagementWizardComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyManagementWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
