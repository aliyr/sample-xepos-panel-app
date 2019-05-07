import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserManagementDetailsComponent } from "./user-management-details.component";
import { SearchInputComponent } from "../../../components/search-input/search-input.component";
import {
  MatCardModule,
  MatInputModule,
  MatTableModule
} from "@angular/material";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatFormFieldModule } from "@angular/material/form-field";
import { RouterTestingModule } from "@angular/router/testing";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ListHeaderComponent } from "../../../components/list-header/list-header.component";

describe("UserManagementComponent", () => {
  let component: UserManagementDetailsComponent;
  let fixture: ComponentFixture<UserManagementDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserManagementDetailsComponent,
        SearchInputComponent,
        ListHeaderComponent
      ],
      imports: [
        RouterTestingModule,
        MatTableModule,
        MatPaginatorModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
