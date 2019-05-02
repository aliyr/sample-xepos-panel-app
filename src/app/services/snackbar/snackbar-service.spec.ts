import { TestBed } from "@angular/core/testing";

import { SnackbarService } from "./snackbar.service";
import { MatSnackBar } from "@angular/material";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { OverlayModule } from "@angular/cdk/overlay";

describe("SnackbarServiceService", () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [OverlayModule],
      providers: [MatSnackBar, SnackbarService]
    })
  );
  it("should be created", () => {
    const service: SnackbarService = TestBed.get(SnackbarService);
    expect(service).toBeTruthy();
  });
});
