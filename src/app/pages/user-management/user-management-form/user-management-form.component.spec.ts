import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UserManagementFormComponent } from "./user-management-form.component";
import { ListHeaderComponent } from "app/components/list-header/list-header.component";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatChipsModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSliderModule,
  MatToolbarModule
} from "@angular/material";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { ImageUploaderComponent } from "app/components/image-uploader/image-uploader.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

describe("UserManagementFormComponent", () => {
  let component: UserManagementFormComponent;
  let fixture: ComponentFixture<UserManagementFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        UserManagementFormComponent,
        ListHeaderComponent,
        ImageUploaderComponent
      ],
      imports: [
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
        BrowserAnimationsModule
      ],
      providers: [MatSnackBar]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserManagementFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
