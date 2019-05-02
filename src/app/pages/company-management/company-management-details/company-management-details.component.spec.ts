import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CompanyManagementDetailsComponent } from "./company-management-details.component";
import { RouterTestingModule } from "@angular/router/testing";
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListHeaderComponent } from "../../../components/list-header/list-header.component";
import { FormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

describe("CompanyManagementDetailsComponent", () => {
  let component: CompanyManagementDetailsComponent;
  let fixture: ComponentFixture<CompanyManagementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyManagementDetailsComponent, ListHeaderComponent],
      imports: [
        RouterTestingModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        FormsModule,
        MatSlideToggleModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyManagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
