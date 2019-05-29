import { Injectable } from '@angular/core';
import { generateGuid } from "app/utils/create-guid";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Injectable({
  providedIn: 'root'
})
export class BatchRequestService {
  batchID: string;
  batchBody;
  responsesArray = [] ;

  constructor(private http: HttpClient ) { 
    this.batchID = generateGuid();
  }

  public newBatchRequest(requests: string[]) {
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


  private batchRequest() {
      this.http
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
      })
      .subscribe(data => {
        const returnedJSON = data.match(/\{(.*?)\}/gim);
        returnedJSON.map((value)=> {
          this.responsesArray.push(JSON.parse(value));
        });
      });
      return this.responsesArray;
    }

}




