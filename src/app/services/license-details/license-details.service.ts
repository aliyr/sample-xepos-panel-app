import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { DialogBoxComponent } from "app/components/dialogs/license-paircode-dialog-box/generate-paircode.component";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LicenseDetailsService {
  constructor(private dialog: MatDialog, private http: HttpClient) {}

  async addLicense(element) {
    let headers = new HttpHeaders();
    const token = localStorage.getItem("token");
    headers = headers
      .set("Content-Type", "application/json; charset=utf-8")
      .set("Authorization", token);

    const res = await this.http
      .get(
        "/odata/XBack/dashboard/Default.getTopReports(companyId=a2eeb17c-49ae-4d27-bef7-d084dcbe113d,locationId=00000000-0000-0000-0000-000000000000,reportType=XBack.ServerCodes.Model.Contracts.ReportType'Day')",
        { headers }
      )
      .toPromise()
      .then((data: any) => {
        element.licensePairCode = data.Id;
        element.status = "pending";

        const dialogRef = this.dialog.open(DialogBoxComponent, {
          width: "450px",
          data: {
            licenseDetail: element
          }
        });
      });
  }
}
