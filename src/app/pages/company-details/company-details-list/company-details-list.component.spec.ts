import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CompanyDetailsListComponent } from "./company-details-list.component";
import { RouterTestingModule } from "@angular/router/testing";
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatPaginatorModule,
  MatTableModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListHeaderComponent } from "app/components/list-header/list-header.component";
import { FormsModule } from "@angular/forms";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

describe("CompanyDetailsListComponent", () => {
  let component: CompanyDetailsListComponent;
  let fixture: ComponentFixture<CompanyDetailsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CompanyDetailsListComponent, ListHeaderComponent],
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
    fixture = TestBed.createComponent(CompanyDetailsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
