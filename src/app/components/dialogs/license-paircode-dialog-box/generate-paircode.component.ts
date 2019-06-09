import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-generate-paircode",
  templateUrl: "./generate-paircode.component.html",
  styleUrls: ["./generate-paircode.component.scss"]
})
export class DialogBoxComponent {
  license: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<DialogBoxComponent>
  ) {
    this.license = data.licenseDetail;
  }

  onConfirmClick(): void {
    this.dialogRef.close(true);
  }
}
