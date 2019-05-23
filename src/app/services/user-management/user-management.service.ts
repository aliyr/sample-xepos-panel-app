import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import UrlGenerator from "app/utils/url-generator";
@Injectable({
  providedIn: "root"
})
export class UserManagementService {
  urlGenerator;

  constructor(private http: HttpClient) {
    this.urlGenerator = new UrlGenerator();
  }

  async getUsers(mainUrl, page, orderBy, pageLength, pageFilter) {
    let headers = new HttpHeaders();
    const token = localStorage.getItem("token");

    const apiEndPoint = this.urlGenerator.generateTableURL(
      mainUrl,
      page,
      orderBy,
      pageLength,
      pageFilter
    );

    headers = headers
      .set("Content-Type", "application/json; charset=utf-8")
      .set("Authorization", token);
    return await this.http.get(apiEndPoint, { headers }).toPromise();
  }
}
