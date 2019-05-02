import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ImageUploaderComponent } from "./image-uploader.component";
import { MatCardModule, MatIconModule, MatSnackBar } from "@angular/material";
import { MatSnackBarModule } from "@angular/material";
import { SnackbarService } from "app/services/snackbar/snackbar.service";

describe("ImageUploaderComponent", () => {
  let component: ImageUploaderComponent;
  let fixture: ComponentFixture<ImageUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImageUploaderComponent],
      imports: [MatIconModule, MatCardModule, MatSnackBarModule],
      providers: [SnackbarService, MatSnackBar]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
