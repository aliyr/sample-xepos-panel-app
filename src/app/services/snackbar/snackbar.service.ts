import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material";

@Injectable({
  providedIn: "root"
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}
  toastSuccess(message: string, buttonText: string, Duration: number) {
    this.snackBar.open(message, buttonText, {
      duration: Duration,
      panelClass: ["success-snackbar"]
    });
  }
  toastAlert(message: string, buttonText: string, Duration: number) {
    this.snackBar.open(message, buttonText, {
      duration: Duration,
      panelClass: ["alert-snackbar"]
    });
  }
  toastError(message: string, buttonText: string, Duration: number) {
    this.snackBar.open(message, buttonText, {
      duration: Duration,
      panelClass: ["error-snackbar"]
    });
  }
}
