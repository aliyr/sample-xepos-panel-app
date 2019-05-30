import { Injectable } from "@angular/core";
import { generateGuid } from "app/utils/generate-guid";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { SnackbarService } from '../snackbar/snackbar.service';
@Injectable({
  providedIn: "root"
})
export class BatchRequestService {
  batchID: string;
  batchBody;
  responsesArray = [];
  batchRequestLength: number;
  batchResponseLength: number;

  constructor(private http: HttpClient , private snackbarService: SnackbarService) {
    // each batch request has a unique ID that should be placed on
    // each request and also on the end of whole request
    this.batchID = generateGuid();
  }

  public createBatchBody(requests: string[]) {
    this.batchRequestLength = requests.length;
    this.batchBody = `${requests
      .map(r => {
        return `
--batch_${this.batchID}
Content-Type: application/http
Content-Transfer-Encoding: binary

GET ${r} HTTP/1.1
Accept: application/json;q=0.9, */*;q=0.1
OData-MaxVersion: 4.0

      `;
      })
      .join("")}
--batch_${this.batchID}--`;

    return this.batchRequest();
  }

  private async batchRequest() {
    const batchRes = await this.http
      .post("odata/XBack/$batch", this.batchBody, {
        headers: new HttpHeaders({
          Accept: "multipart/mixed",
          "Content-Type": `multipart/mixed;boundary=batch_${
            this.batchID
          };IEEE754Compatible=true`,
          Authorization: localStorage.getItem("token"),
          "OData-MaxVersion": "4.0",
          "OData-Version": "4.0",
          "X-CorrelationId": generateGuid()
        }),
        responseType: "text"
      }).toPromise();


    // Extracts objects that started with
    // Odata and push them into an array
    const returnedJSONArray = batchRes.match(/\{(\"@odata)(.*?)\}/gim);
    returnedJSONArray.map(value => {
      this.responsesArray.push(JSON.parse(value));
    });
    this.batchResponseLength = this.responsesArray.length;

    if (this.batchResponseLength === this.batchRequestLength) {
      return this.responsesArray;
    } else {
      // if one or more requests become failed, show an error
      this.snackbarService.toastError(' something went wrong :( ' , ' close ' , 3000);
    }
  }
}
