import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CompanyManagementFormComponent } from "./company-management-form.component";
import { ListHeaderComponent } from "app/components/list-header/list-header.component";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  MatSnackBar,
  MatToolbarModule
} from "@angular/material";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ImageUploaderComponent } from "app/components/image-uploader/image-uploader.component";
import { RouterTestingModule } from "@angular/router/testing";

describe("CompanyManagementFormComponent", () => {
  let component: CompanyManagementFormComponent;
  let fixture: ComponentFixture<CompanyManagementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CompanyManagementFormComponent,
        ListHeaderComponent,
        ImageUploaderComponent
      ],
      imports: [
        MatFormFieldModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatAutocompleteModule,
        MatSelectModule,
        MatIconModule,
        MatChipsModule,
        MatCardModule,
        MatSlideToggleModule,
        MatInputModule,
        MatToolbarModule,
        BrowserAnimationsModule,
        RouterTestingModule
      ],
      providers: [MatSnackBar]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
